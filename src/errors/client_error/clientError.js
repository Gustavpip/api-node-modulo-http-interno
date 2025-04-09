import { BaseError } from "../base/baseError.js";

export class ClientError extends BaseError {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
}
