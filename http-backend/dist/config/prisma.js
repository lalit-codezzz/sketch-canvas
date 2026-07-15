import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import safeEnv from "../utils/loadEnvVars.js";
const connectionString = `${safeEnv.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const globalForPrisma = globalThis;
if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ adapter });
}
export const prisma = globalForPrisma.prisma;
