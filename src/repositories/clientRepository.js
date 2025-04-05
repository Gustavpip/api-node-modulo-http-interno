export class ClientRepository {
  constructor() {}
  async getAll() {
    const clients = JSON.stringify([{ id: 1, name: "Johnny" }]);

    return clients;
  }
}
