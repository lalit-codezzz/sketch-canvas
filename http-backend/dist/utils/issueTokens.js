import jwt from "jsonwebtoken";
import safeEnv from "./loadEnvVars.js";
import ApiError from "./ApiError.js";
export function generateToken(payload) {
    const token = jwt.sign(payload, safeEnv.JWT_SECRET, { expiresIn: "1h" });
    return token;
}
export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, safeEnv.JWT_SECRET);
        const { userId } = decoded;
        return userId;
    }
    catch (error) {
        const err = error;
        if (err.name === "JsonWebTokenError") {
            throw new ApiError({ error: "Unauthorized!", sc: 401 });
        }
        else {
            console.log(err);
        }
    }
}
