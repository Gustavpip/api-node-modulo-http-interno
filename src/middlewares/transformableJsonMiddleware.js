export class transformableJsonMiddleware {
  async transform(request, response, next) {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      body = JSON.parse(body);
      request.body = body;
    });
    next(request, response);
  }
}
