# 🌌 Aurora Backend

Aurora Backend es una aplicación basada en **Node.js**, **Express** y **TypeScript**, diseñada con arquitectura modular y soporte para módulos **ESM (ECMAScript Modules)**.  
El proyecto utiliza `ts-node` y `nodemon` para un flujo de desarrollo rápido y eficiente.

---

## 🚀 Características principales

- ⚡ Arquitectura modular con soporte para módulos ESM  
- 🧩 Desarrollo en TypeScript con tipado completo  
- 🔁 Recarga automática mediante `nodemon`  
- 🔐 Preparado para autenticación JWT  
- 🧠 Estructura escalable por módulos (users, roles, productos, etc.)

---

## 📦 Requisitos previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) v18 o superior  
- [npm](https://www.npmjs.com/) (se instala junto con Node.js)  
- [TypeScript](https://www.typescriptlang.org/) (opcional globalmente)  
- Git (para clonar el repositorio)

Verifica las versiones con:

```
node -v
npm -v
```

---

## ⚙️ Instalación y configuración

**Clonar el repositorio**
```
git clone https://github.com/tuusuario/aurora-backend.git
cd aurora-backend
```

**Instalar dependencias**
```
npm install
```

**Compilar el proyecto** (opcional en desarrollo con ts-node)
```
npx tsc
```

**Ejecutar en modo desarrollo**
```
npm run dev
```

Este comando utiliza **nodemon + ts-node** para reiniciar el servidor automáticamente ante cualquier cambio.

---

## 🧱 Estructura del proyecto

```
aurora-backend/
├── node_modules/
├── public/
├── src/
│   ├── bin/
│   │   └── www.ts
│   ├── entities/
│   │   ├── chats.ts
│   │   ├── invalidTokens.ts
│   │   ├── messages.ts
│   │   ├── permissions.ts
│   │   ├── products.ts
│   │   ├── roles.ts
│   │   ├── rolesPermissions.ts
│   │   └── users.ts
│   ├── routes/
│   │   ├── index.ts
│   │   └── users.ts
│   └── app.ts
├── views/
│   ├── error.jade
│   ├── index.jade
│   └── layout.jade
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## 📦 Rutas

### 👤 Users

Ruta base: `/api/users`

| Método | Endpoint | Descripción | Autenticación |
|--------|-----------|--------------|----------------|
| GET | `/` | Obtiene la lista de todos los usuarios | 🔓 Pública |
| GET | `/:id` | Obtiene la información de un usuario por su ID | 🔓 Pública |
| POST | `/` | Crea un nuevo usuario | 🔒 Privada (admin o registro controlado) |
| PUT | `/:id` | Actualiza la información de un usuario existente | 🔒 Privada |
| DELETE | `/:id` | Elimina o desactiva un usuario | 🔒 Privada |
| POST | `/login` | Inicia sesión y devuelve un token JWT | 🔓 Pública |
| POST | `/refresh` | Refresca el token JWT mediante un token de refresco válido | 🔒 Requiere tokenRefresh |

---

## 🧪 Ejemplos de uso

**Obtener todos los usuarios**
```
GET http://localhost:3000/api/users
```

**Crear un nuevo usuario**
```
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "passwordHash": "hashSeguro",
  "rolId": 1
}
```

**Iniciar sesión**
```
POST http://localhost:3000/api/users/login
Content-Type: application/json

{
  "email": "juan@example.com",
  "password": "123456"
}
```

---

## 🧰 Scripts disponibles

| Comando | Descripción |
|----------|--------------|
| `npm run dev` | Ejecuta el servidor en modo desarrollo con nodemon |
| `npm run build` | Compila el código TypeScript en JavaScript |
| `npm start` | Inicia el servidor compilado desde `dist/` |

---

## 🛡️ Seguridad y buenas prácticas

- Todas las rutas sensibles deben protegerse con middleware de autenticación JWT.  
- No guardar contraseñas en texto plano: usar **bcrypt** para el hash.  
- Validar siempre la entrada del usuario (**express-validator** o **zod**).  
- Mantener variables sensibles en `.env` (como claves JWT, credenciales de base de datos, etc.).


