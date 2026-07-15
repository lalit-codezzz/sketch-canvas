import z from "zod";
export const envVarsSchema = z.object({
    HTTP_BACKEND_PORT: z.number().gte(3000, "Invalid http backend port!"),
    DATABASE_URL: z.string().trim().min(10, "Invalid database url!"),
    JWT_SECRET: z.string().trim().min(15, "Invalid jwt secret"),
});
