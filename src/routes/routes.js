import { ClientFactory } from "../factories/clientFactory.js";
import { HeadersMiddleware } from "../middlewares/headersMiddleware.js";

const clientController = ClientFactory.build();

const headersMiddleware = new HeadersMiddleware();

export const routes = {
  "/clientes:get": {
    middlewares: [headersMiddleware.setHeaders],
    controller: clientController.getAll.bind(clientController),
  },
  "/clientes:post": {
    middlewares: [headersMiddleware],
    controller: clientController,
  },

  default: async (_request, _response) => {
    throw new Error("Route Not Found.");
  },
};
