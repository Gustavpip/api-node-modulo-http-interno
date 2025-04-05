export class GetClientUseCase {
  #clientService;

  constructor(clientService) {
    this.#clientService = clientService;
  }
  
  async getAll() {
    const clients = await this.#clientService.getAll();
    return clients;
  }
}