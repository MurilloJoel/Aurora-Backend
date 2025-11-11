# Carpeta Routes

Esta carpeta contiene todas las rutas de la API de **Aurora Backend**.  
Cada archivo define un conjunto de rutas relacionadas con un recurso o funcionalidad específica.  
Las rutas se conectan con los controladores correspondientes y gestionan la lógica de solicitud/respuesta, validaciones y seguridad (como JWT).

---

## Archivos y rutas

### 1. `indexRoutes.ts`
- **Descripción:**  
  Ruta principal del backend que devuelve un mensaje de bienvenida.
- **Ruta:** `GET /`
- **Respuesta:** Texto plano `"Bienvenido a Aurora 🚀"`

---

### 2. `authRoutes.ts`
- **Descripción:**  
  Contiene rutas de autenticación y gestión de sesión.
- **Rutas:**
  - `POST /login` → Autenticación del usuario y generación de tokens (access y refresh).
  - `POST /refresh` → Obtiene un nuevo access token usando el refresh token.
  - `POST /logout` → Invalida el refresh token y cierra la sesión.
  - `GET /profile` → Devuelve el perfil del usuario autenticado. Protegida con JWT (`requireAuth`).

**Notas:**  
- `login` requiere `email` y `password` en el body.  
- `refresh` y `logout` requieren `refreshToken` en el body.  
- `profile` requiere un access token válido en el header `Authorization`.

---

### 3. `usersRoutes.ts`
- **Descripción:**  
  Rutas para gestión de usuarios.
- **Rutas:**
  - `GET /users` → Obtiene todos los usuarios. *(protegida con JWT)*  
  - `GET /users/:id` → Obtiene un usuario por ID. *(protegida con JWT)*  
  - `POST /users` → Crea un nuevo usuario.  
  - `PUT /users/:id` → Actualiza un usuario existente. *(protegida con JWT)*  
  - `DELETE /users/:id` → Elimina un usuario. *(protegida con JWT)*  

**Notas:**  
- Al crear un usuario se debe enviar `nombre`, `email`, `password` y `rolId`.  
- Las rutas protegidas requieren un token válido en `Authorization`.

---

### 4. `productsRoutes.ts`
- **Descripción:**  
  Rutas para gestión de productos.
- **Rutas:**
  - `GET /products` → Obtiene todos los productos.
  - `GET /products/:id` → Obtiene un producto por ID.
  - `POST /products` → Crea un nuevo producto.
  - `PUT /products/:id` → Actualiza un producto existente.
  - `DELETE /products/:id` → Elimina un producto.

**Notas:**  
- Al crear un producto se deben enviar `nombre`, `precio` y `stock`.  
- `descripcion` y `activo` son opcionales (por defecto `activo = true`).

---

### 5. `chatsRoutes.ts`
- **Descripción:**  
  Rutas para gestión de chats.
- **Rutas:**
  - `GET /chats` → Obtiene todos los chats.
  - `GET /chats/:id` → Obtiene un chat por ID.
  - `POST /chats` → Crea un nuevo chat.
  - `PUT /chats/:id` → Actualiza un chat existente.
  - `DELETE /chats/:id` → Elimina un chat.

**Notas:**  
- Al crear un chat se deben enviar `usuarioId` y `titulo`.

---

### 6. `messagesRoutes.ts`
- **Descripción:**  
  Rutas para gestión de mensajes.
- **Rutas:**
  - `GET /messages` → Obtiene todos los mensajes.
  - `GET /messages/chat/:chatId` → Obtiene mensajes de un chat específico.
  - `GET /messages/:id` → Obtiene un mensaje por ID.
  - `POST /messages` → Crea un nuevo mensaje.
  - `PUT /messages/:id` → Actualiza un mensaje existente.
  - `DELETE /messages/:id` → Elimina un mensaje.

**Notas:**  
- Al crear un mensaje se deben enviar `chatId`, `remitente` y `contenido`.

---

## Ejemplos de uso

### Usuarios

**GET /users**
```bash
GET /users
Authorization: Bearer <accessToken>

{
  "message": "Usuarios obtenidos correctamente",
  "data": [
    { "id": 1, "nombre": "Juan Perez", "email": "juan@mail.com", "rolId": 2 }
  ]
}
```
**POST /users**
```bash
POST /users
Content-Type: application/json

{
  "nombre": "Maria Lopez",
  "email": "maria@mail.com",
  "password": "securePass123",
  "rolId": 2
}
```
**Respuesta:**
```bash
{
  "message": "Usuario creado correctamente",
  "data": { "id": 3, "nombre": "Maria Lopez", "email": "maria@mail.com", "rolId": 2 }
}
```
### Productos
**GET /products**
```bash
GET /products
```
**Respuesta:**
```bash
{
  "message": "Productos obtenidos correctamente",
  "data": [
    { "id": 1, "nombre": "Aurora Widget", "precio": 29.99, "stock": 100 }
  ]
}
```
**POST /products**
```bash
POST /products
Content-Type: application/json

{
  "nombre": "Aurora Lamp",
  "descripcion": "Lámpara inteligente",
  "precio": 39.99,
  "stock": 20
}
```
**Respuesta:**
```bash
{
  "message": "Producto creado correctamente",
  "data": { "id": 3, "nombre": "Aurora Lamp", "precio": 39.99, "stock": 20, "activo": true }
}
```
### Chats
**GET /chats**
```bash
GET /chats
```
**Respuesta**
```bash
[
  { "id": 1, "usuarioId": 1, "titulo": "Chat de prueba" }
]
```
**POST /chats**
```bash
POST /chats
Content-Type: application/json

{
  "usuarioId": 1,
  "titulo": "Nuevo chat"
}
```
**Respuesta**
```bash
{
  "message": "Chat creado correctamente",
  "data": { "id": 2, "usuarioId": 1, "titulo": "Nuevo chat" }
}
```
### Mensajes
**GET /messages/chat/1**
```bash
GET /messages/chat/1
```
**Respuesta**
```bash
[
  { "id": 1, "chatId": 1, "remitente": "Juan", "contenido": "Hola!" }
]
```
**POST /messages**
```bash
POST /messages
Content-Type: application/json

{
  "chatId": 1,
  "remitente": "Maria",
  "contenido": "Hola, ¿cómo estás?"
}
```
**Respuesta**
```bash
{
  "message": "Mensaje creado correctamente",
  "data": { "id": 2, "chatId": 1, "remitente": "Maria", "contenido": "Hola, ¿cómo estás?" }
}
```