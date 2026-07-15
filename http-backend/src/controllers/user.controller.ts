import type { Request, Response } from "express";

async function getDashboard(request: Request, response: Response) {
  return response.json({
    userId: `------${request.userId}------`,
  });
}
export { getDashboard };
