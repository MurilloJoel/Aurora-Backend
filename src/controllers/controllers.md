# 📂 Carpeta `controllers`

La carpeta **`controllers`** contiene los controladores principales de la API.  
Cada controlador se encarga de **gestionar las solicitudes HTTP**, validarlas, comunicarse con los **servicios correspondientes**, y devolver respuestas claras y consistentes al cliente.

Todos los controladores usan:
- **Express** para manejar `Request` y `Response`.
- **Servicios (`services/`)** para la lógica de negocio.
- **Logger (`util/logger.js`)** para registrar advertencias y errores.
- Estructura de respuesta estandarizada (`message` y `data`).

---

## 🧩 Estructura general

Cada controlador sigue la misma estructura básica:

1. **Importaciones** de Express, el servicio correspondiente y el logger.
2. **Funciones asíncronas** que manejan las rutas (`GET`, `POST`, `PUT`, `DELETE`).
3. **Manejo de errores** con `try/catch`, devolviendo códigos HTTP adecuados:
   - `200` → Éxito en la operación.
   - `201` → Creación exitosa.
   - `400` → Petición inválida (datos faltantes o incorrectos).
   - `404` → Recurso no encontrado.
   - `500` → Error interno del servidor.

---

## 🗣️ `usersController.ts`

Controlador encargado de gestionar los **usuarios**.

### Funciones:
- **`getUsers`** → Obtiene todos los usuarios registrados.  
- **`getUserById`** → Obtiene un usuario específico por su ID.  
- **`createUser`** → Crea un nuevo usuario con `nombre`, `email`, `password` y `rolId`.  

📤 **Respuestas:** JSON con los datos o mensajes de error según el caso.

---

## 💬 `chatsController.ts`

Controlador para gestionar los **chats** de los usuarios.

### Funciones:
- **`getChats`** → Devuelve todos los chats existentes.  
- **`getChatById`** → Devuelve un chat por su ID.  
- **`createChat`** → Crea un nuevo chat para un usuario.  
- **`updateChat`** → Modifica el título de un chat existente.  
- **`deleteChat`** → Elimina un chat.  

📤 **Respuestas:**  
Mensajes de éxito o error, y datos actualizados en formato `{ message, data }`.

---

## 💭 `messagesController.ts`

Controlador encargado de manejar los **mensajes** dentro de los chats.

### Funciones:
- **`getMessages`** → Obtiene todos los mensajes.  
- **`getMessagesByChatId`** → Obtiene los mensajes de un chat específico.  
- **`getMessageById`** → Obtiene un mensaje por su ID.  
- **`createMessage`** → Crea un mensaje nuevo dentro de un chat.  
- **`updateMessage`** → Edita el contenido de un mensaje existente.  
- **`deleteMessage`** → Elimina un mensaje por su ID.  

📤 **Respuestas:**  
Mensajes claros y consistentes (`201` al crear, `404` si no existe, etc.).

---

## 🛍️ `productsController.ts`

Controlador para la gestión de **productos**.

### Funciones:
- **`getProducts`** → Lista todos los productos disponibles.  
- **`getProductById`** → Muestra los detalles de un producto por su ID.  
- **`createProduct`** → Crea un nuevo producto (requiere `nombre`, `precio`, `stock`).  
- **`updateProduct`** → Actualiza un producto existente.  
- **`deleteProduct`** → Elimina un producto del sistema.  

📤 **Respuestas:**  
Mensajes de éxito o error según el resultado de la operación.

---

## 🧱 Convenciones

- Todos los controladores usan **arrow functions** y exportaciones con nombre (`export const ...`).
- El **manejo de errores** es centralizado con `logger.warn()` y respuestas JSON uniformes.
- Se respeta el principio **Single Responsibility**: los controladores solo gestionan peticiones HTTP, la lógica de negocio se encuentra en los **services**.

---

## 📘 Ejemplo de uso

### Petición:  
```http
POST /chats
Content-Type: application/json

{
  "usuarioId": 1,
  "titulo": "Nuevo chat de soporte"
}
