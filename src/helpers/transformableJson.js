export class TransformableJson {
  #data;

  async prepare(request, response, next) {
    request.on("data", (chunk) => {
      this.#data += chunk;
    });

    request.on("end", async () => {
      this.#data = await this.transform(body);
      request.body = body;
    });
    next(request, response);
  }

  async transform(data) {
    return JSON.stringify(data);
  }
}
