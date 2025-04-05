import Http from "http";

import { ClientFactory } from "./src/factories/clientFactory.js";
import { routes } from "./src/routes/routes.js";
import { errorClosure } from "./src/closure/errorClosure.js";

const PORT = 3000;

const clientController = ClientFactory.build();

const handler = (request, response) => {
  const key = `${request.url}:${request.method.toLowerCase()}`;
  const choice = routes[key] || routes["default"];

  return choice(
    request,
    response,
    clientController.getAll.bind(clientController)
  ).catch((e) => {
    errorClosure(response)(e);
  });
};

Http.createServer(handler).listen(PORT, () => {
  console.log("Rodando na porta ".concat(PORT));
});
