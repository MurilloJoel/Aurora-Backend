import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

// GET users → Obtener todos los usuarios
router.get('/', async (req: Request, res: Response) => {
  try {
    // Aquí iría la llamada al servicio o modelo que obtiene todos los usuarios
    res.status(200).json({ message: 'Lista de usuarios obtenida correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// GET users/:id → Obtener un usuario por ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.status(200).json({ message: `Usuario con ID ${id} obtenido correctamente` });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// POST users → Crear un nuevo usuario
router.post('/', async (req: Request, res: Response) => {
  const { nombre, email, passwordHash, rolId } = req.body;
  try {
    // Aquí podrías generar la fecha de creación y estado activo por defecto
    const nuevoUsuario = {
      nombre,
      email,
      passwordHash,
      rolId,
      creadoEn: new Date(),
      actualizadoEn: new Date(),
      activo: true,
    };
    res.status(201).json({ message: 'Usuario creado correctamente', data: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// PUT users/:id → Actualizar un usuario existente
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, email, passwordHash, rolId, activo } = req.body;

  try {
    const usuarioActualizado = {
      id,
      nombre,
      email,
      passwordHash,
      rolId,
      actualizadoEn: new Date(),
      activo,
    };
    res.status(200).json({ message: 'Usuario actualizado correctamente', data: usuarioActualizado });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// DELETE users/:id → Eliminar (o desactivar) un usuario
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.status(200).json({ message: `Usuario con ID ${id} eliminado (o desactivado) correctamente` });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

// POST users/login → Iniciar sesión
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Aquí iría la lógica de autenticación (verificar hash, generar JWT, etc.)
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      tokenJwt: 'token_de_ejemplo',
      tokenRefresh: 'refresh_de_ejemplo',
    });
  } catch (error) {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

// POST users/refresh → Refrescar token JWT
router.post('/refresh', async (req: Request, res: Response) => {
  const { tokenRefresh } = req.body;
  try {
    // Aquí se validaría el tokenRefresh y se emitiría un nuevo tokenJwt
    res.status(200).json({
      message: 'Token refrescado correctamente',
      tokenJwt: 'nuevo_token_jwt',
    });
  } catch (error) {
    res.status(401).json({ error: 'Token de refresco inválido' });
  }
});

export default router;
