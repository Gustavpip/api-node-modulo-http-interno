export class HeadersMiddleware {
  async setHeaders(request, response, next) {
    response.setHeader("Content-Type", "application/json");
    next(request, response);
  }
}
