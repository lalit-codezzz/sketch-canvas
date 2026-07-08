import http from "http";

import app from "./app";

const server = http.createServer(app);

server.listen(3000, () => console.log("Server started! on PORT - 3000"));
