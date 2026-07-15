import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";

export default function schemaValidator(schema: ZodObject) {
  return (request: Request, response: Response, next: NextFunction) => {
    const data = request.body;
    const result = schema.safeParse(data);

    if (!result.success) {
      return response.status(400).json({
        success: false,
        sc: 400,
        error: result.error.issues[0].message,
      });
    }
    request.body = result.data;
    next();
  };
}
