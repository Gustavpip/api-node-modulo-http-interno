import { ClientController } from "../controllers/clientController.js";
import { TransformableJson } from "../helpers/transformableJson.js";
import { ClientRepository } from "../repositories/clientRepository.js";
import { ClientService } from "../services/clientService.js";
import { GetClientUseCase } from "../usecases/getClientUseCase.js";

export class ClientFactory {
  static build() {
    const transformableJson = new TransformableJson();
    const clientRepository = new ClientRepository();
    const clientService = new ClientService(
      clientRepository,
      transformableJson
    );
    const getClientUseCase = new GetClientUseCase(clientService);
    const clientController = new ClientController(getClientUseCase);

    return clientController;
  }
}
