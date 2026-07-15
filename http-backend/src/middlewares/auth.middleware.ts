import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/issueTokens.js";
import ApiResponse from "../utils/ApiResponse.js";
import type ApiError from "../utils/ApiError.js";

// Extending the Express's Request to hold userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export default function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  let authToken = request.headers.authorization;

  if (!authToken) {
    authToken = request.cookies["token"];
  }

  if (!authToken) {
    return response
      .status(401)
      .json(
        new ApiResponse({ success: false, message: "Unauthorized!", sc: 401 }),
      );
  }

  try {
    const userId = verifyToken(authToken);
    request.userId = userId;
    next();
  } catch (error) {
    const err = error as ApiError;
    return response
      .status(err.sc)
      .json(
        new ApiResponse({ success: false, message: err.message, sc: err.sc }),
      );
  }
}
