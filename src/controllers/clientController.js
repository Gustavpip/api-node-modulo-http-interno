export class ClientController {
  #getClientUseCase;

  constructor(getClientUseCase) {
    this.#getClientUseCase = getClientUseCase;
  }

  async getAll(_request, response) {
    try {
      const clients = await this.#getClientUseCase.getAll();

      response.write(clients);
      response.write("\n");
      response.end();
    } catch (error) {
      console.log(error);
    }
  }
}
