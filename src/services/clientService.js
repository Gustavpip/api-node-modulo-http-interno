export class ClientService {
  #clientRepository;
  transformableJson;

  constructor(clientRepository, transformableJson) {
    this.#clientRepository = clientRepository;
    this.transformableJson = transformableJson;
  }

  async getAll() {
    const clients = await this.#clientRepository.getAll();
    return await this.transformableJson.transform(clients);
  }
}
