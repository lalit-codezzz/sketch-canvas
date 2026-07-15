import jwt from "jsonwebtoken";

import safeEnv from "./loadEnvVars.js";
import ApiError from "./ApiError.js";

type Payload = {
  userId: string;
};

export function generateToken(payload: Payload): string {
  const token = jwt.sign(payload, safeEnv.JWT_SECRET, { expiresIn: "1h" });
  return token;
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, safeEnv.JWT_SECRET);
    const { userId } = decoded as Payload;
    return userId;
  } catch (error) {
    const err = error as ApiError;
    if (err.name === "JsonWebTokenError") {
      throw new ApiError({ error: "Unauthorized!", sc: 401 });
    } else {
      console.log(err);
    }
  }
}
