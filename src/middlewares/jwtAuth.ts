import { expressjwt } from "express-jwt";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("❌ Falta JWT_SECRET en el archivo .env");
}

export const requireAuth = expressjwt({
  secret: JWT_SECRET,
  algorithms: ["HS256"],
  credentialsRequired: true,
  requestProperty: "auth",
});
