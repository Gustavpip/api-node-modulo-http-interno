import Http from "http";

import { promisify } from "util";

import { routes } from "./src/routes/routes.js";
import db from "./src/config/database/db.js";

const PORT = 3000;

const handler = (request, response) => {
  const key = `${request.url}:${request.method.toLowerCase()}`;
  const choice = routes[key] || routes["default"];

  switch (request.method.toLowerCase()) {
    case "get":
      return choice.middlewares[0](request, response, choice.controller);

    default:
      break;
  }
};

const server = Http.createServer(handler).listen(PORT, () => {
  console.log("Rodando na porta ".concat(PORT).concat(process.pid));
});

process.on("SIGTERM", async (signal) => {
  await promisify(server.close.bind(server))();

  await db.destroy();

  process.exit(0);
});

process.on("uncaughtException", async (error) => {
  //escrever o erro em um log e talvez encerrar o processo do node
});

process.on("unhandledRejection", async (reason, promise) => {
  //escrever o erro em um log e talvez encerrar o processo do no
});
