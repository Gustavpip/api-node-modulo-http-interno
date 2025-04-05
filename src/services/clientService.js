export class ClientService {
  #clientRepository;

  constructor(clientRepository) {
    this.#clientRepository = clientRepository;
  }

  async getAll() {
    const clients = await this.#clientRepository.getAll();
    return clients;
  }
}
