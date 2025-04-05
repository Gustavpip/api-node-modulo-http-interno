import { HeadersMiddleware } from "../middlewares/headersMiddleware.js";
import { transformableJsonMiddleware } from "../middlewares/transformableJsonMiddleware.js";

export function middlewareChain(middlewares) {
    
}

const transformJson = new transformableJsonMiddleware();
const headersMiddleware = new HeadersMiddleware();

export const routes = {
  "/clientes:get": headersMiddleware.setHeaders.bind(headersMiddleware),
  "/clientes:post": headersMiddleware.setHeaders.bind(headersMiddleware),

  default: async (_request, _response) => {
    throw new Error("Route Not Found.");
  },
};
