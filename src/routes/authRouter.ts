import express, { type Request, type Response } from "express"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser"
import { dbConfig } from "../config/db.js"
import { requireAuth } from "../middlewares/jwtAuth.js"
import logger from "../utils/logger.js"
import { ERROR_CODES } from "../utils/codes.js"
import { jwtUtils} from "../utils/jwt.js"

const router = express.Router()
router.use(cookieParser())

const { isProduction: isProd, supabase, mysqlPool } = dbConfig

// ==============================
// Interfaces para los cuerpos de las peticiones
// ==============================
interface LoginBody {
  email: string
  password: string
}

interface RegisterBody {
  nombre: string
  email: string
  password: string
  rolId?: number
}

// ==============================
// 🔑 POST /login → Autenticación y generación de tokens
// ==============================
router.post("/login", async (req: Request<{}, {}, LoginBody>, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) return res.status(400).json({ error: ERROR_CODES.AUTH[685] })

  try {
    let user: any = null

    if (isProd && supabase) {
      const { data, error } = await supabase.from("users").select("*").eq("email", email).single()
      if (error || !data) throw new Error(ERROR_CODES.USERS[620])
      user = data
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query("SELECT * FROM users WHERE email = ?", [email])
      if (!rows.length) throw new Error(ERROR_CODES.USERS[620])
      user = rows[0]
    }

    const validPassword = await bcrypt.compare(password, user.password_hash)
    if (!validPassword) throw new Error(ERROR_CODES.AUTH[688])

    const accessToken = jwtUtils.generateAccessToken(user)
    const refreshToken = jwtUtils.generateRefreshToken(user)

    // Guardar refresh token en la base de datos
    if (isProd && supabase) {
      await supabase.from("users").update({ token_refresh: refreshToken }).eq("id", user.id)
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query("UPDATE users SET token_refresh = ? WHERE id = ?", [refreshToken, user.id])
    }

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60, // 1 hora
    })

    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      refreshToken, // Return refresh token in body for client storage
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol_id: user.rol_id,
        activo: user.activo,
      },
    })
  } catch (error: any) {
    logger.warn(error)
    return res.status(401).json({ error: error.message })
  }
})

// ==============================
// 📝 POST /register → Registro de nuevo usuario con generación de tokens
// ==============================
router.post("/register", async (req: Request<{}, {}, RegisterBody>, res: Response) => {
  const { nombre, email, password, rolId = 2 } = req.body

  if (!nombre || !email || !password) {
    return res.status(400).json({
      error: ERROR_CODES.SYSTEM[732],
      message: "Faltan campos obligatorios: nombre, email, password",
    })
  }

  try {
    if (isProd && supabase) {
      const { data: existingUser } = await supabase.from("users").select("id").eq("email", email).single()
      if (existingUser) {
        return res.status(409).json({ error: "El usuario ya existe" })
      }
    } else if (!isProd && mysqlPool) {
      const [existing]: any = await mysqlPool.query("SELECT id FROM users WHERE email = ?", [email])
      if (existing.length > 0) {
        return res.status(409).json({ error: "El usuario ya existe" })
      }
    }

    const password_hash = await bcrypt.hash(password, 10)
    const ahora = new Date().toISOString().slice(0, 19).replace("T", " ")

    let newUser: any

    if (isProd && supabase) {
      const { data, error } = await supabase
        .from("users")
        .insert([
          { nombre, email, password_hash, rol_id: rolId, activo: true, creado_en: ahora, actualizado_en: ahora },
        ])
        .select()
        .single()
      if (error) throw error
      newUser = data
    } else if (!isProd && mysqlPool) {
      const [result]: any = await mysqlPool.query(
        "INSERT INTO users (nombre, email, password_hash, rol_id, activo, creado_en, actualizado_en) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [nombre, email, password_hash, rolId, true, ahora, ahora],
      )
      const [rows]: any = await mysqlPool.query("SELECT * FROM users WHERE id = ?", [result.insertId])
      newUser = rows[0]
    }

    const accessToken = jwtUtils.generateAccessToken(newUser)
    const refreshToken = jwtUtils.generateRefreshToken(newUser)

    // Guardar refresh token en la base de datos
    if (isProd && supabase) {
      await supabase.from("users").update({ token_refresh: refreshToken }).eq("id", newUser.id)
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query("UPDATE users SET token_refresh = ? WHERE id = ?", [refreshToken, newUser.id])
    }

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60, // 1 hora
    })

    return res.status(201).json({
      message: "Usuario registrado correctamente",
      refreshToken, // Return refresh token in body for client storage
      user: {
        id: newUser.id,
        nombre: newUser.nombre,
        email: newUser.email,
        rol_id: newUser.rol_id,
        activo: newUser.activo,
      },
    })
  } catch (err: any) {
    logger.error(err)
    return res.status(500).json({ error: ERROR_CODES.SYSTEM[729] })
  }
})

// ==============================
// 🔄 POST /refresh → Obtener nuevo access token desde request body
// ==============================
router.post("/refresh", async (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken

  if (!refreshToken) return res.status(400).json({ error: ERROR_CODES.AUTH[689] })

  try {
    let user: any = null

    if (isProd && supabase) {
      const { data, error } = await supabase.from("users").select("*").eq("token_refresh", refreshToken).single()
      if (error || !data) throw new Error(ERROR_CODES.AUTH[681])
      user = data
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query("SELECT * FROM users WHERE token_refresh = ?", [refreshToken])
      if (!rows.length) throw new Error(ERROR_CODES.AUTH[681])
      user = rows[0]
    }

    try {
      jwtUtils.verifyRefreshToken(refreshToken)
    } catch (err: any) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ error: "jwt_expired", message: "Refresh token ha expirado" })
      }
      throw err
    }

    const newAccessToken = jwtUtils.generateAccessToken(user)

    res.cookie("access_token", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60,
    })

    return res.status(200).json({ message: "Token renovado correctamente" })
  } catch (error: any) {
    return res.status(401).json({ error: error.message })
  }
})

// ==============================
// 🚪 POST /logout → Invalida el refresh token y limpia cookies
// ==============================
router.post("/logout", async (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken

  if (!refreshToken) return res.status(400).json({ error: ERROR_CODES.AUTH[689] })

  try {
    if (isProd && supabase) {
      await supabase.from("users").update({ token_refresh: null }).eq("token_refresh", refreshToken)
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query("UPDATE users SET token_refresh = NULL WHERE token_refresh = ?", [refreshToken])
    }

    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    })

    return res.status(200).json({ message: "Sesión cerrada correctamente" })
  } catch (error: any) {
    return res.status(500).json({ error: ERROR_CODES.SYSTEM[729] })
  }
})

// ==============================
// 👤 GET /profile → Ruta protegida con JWT desde cookies
// ==============================
router.get("/profile", requireAuth, async (req: Request, res: Response) => {
  try {
    const user = (req as any).auth
    res.status(200).json({ message: "Perfil accedido correctamente", user })
  } catch (error: any) {
    return res.status(500).json({ error: ERROR_CODES.SYSTEM[729] })
  }
})

export default router
