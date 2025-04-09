import db from "../config/database/db.js";

export class ClientRepository {
  constructor() {}
  async getAll() {
    const clients = await db("clientes").select("*");

    return clients;
  }
}
