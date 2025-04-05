import { ClientController } from "../controllers/clientController.js";
import { ClientRepository } from "../repositories/clientRepository.js";
import { ClientService } from "../services/clientService.js";
import { GetClientUseCase } from "../usecases/getClientUseCase.js";

export class ClientFactory {
  static build() {
    const clientRepository = new ClientRepository();
    const clientService = new ClientService(clientRepository);
    const getClientUseCase = new GetClientUseCase(clientService);
    const clientController = new ClientController(getClientUseCase);

    return clientController;
  }
}
