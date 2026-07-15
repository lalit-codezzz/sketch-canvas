import "dotenv/config";
import { envVarsSchema } from "../schema/envVars.schema.js";
function loadEnvVars() {
    const HTTP_BACKEND_PORT = Number(process.env.HTTP_BACKEND_PORT);
    const DATABASE_URL = process.env.DATABASE_URL;
    const JWT_SECRET = process.env.JWT_SECRET;
    const result = envVarsSchema.safeParse({ HTTP_BACKEND_PORT, DATABASE_URL, JWT_SECRET });
    if (!result.success) {
        console.log(result.error);
        process.exit(1);
    }
    else {
    }
    return {
        HTTP_BACKEND_PORT: result.data.HTTP_BACKEND_PORT,
        DATABASE_URL: result.data.DATABASE_URL,
        JWT_SECRET: result.data.JWT_SECRET,
    };
}
export default loadEnvVars();
