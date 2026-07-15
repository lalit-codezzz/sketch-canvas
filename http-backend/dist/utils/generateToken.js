import jwt from "jsonwebtoken";
import safeEnv from "./loadEnvVars.js";
export default function generateToken(payload) {
    const token = jwt.sign(payload, safeEnv.JWT_SECRET, { expiresIn: "1h" });
    return token;
}
