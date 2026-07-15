import "dotenv/config";

import http from "http";

import app from "./app.js";
import safeEnv from "./utils/loadEnvVars.js";

const server = http.createServer(app);

server.listen(safeEnv.HTTP_BACKEND_PORT, () =>
  console.log(`Server running on PORT: ${safeEnv.HTTP_BACKEND_PORT}`),
);
