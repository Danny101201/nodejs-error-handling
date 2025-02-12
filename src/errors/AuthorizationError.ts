import { CustomerError } from "../utils/customerError"

export class AuthorizationError extends CustomerError {
  StatusCode = 403
  constructor() {
    super('user unAuthorized')
    Object.setPrototypeOf(this, AuthorizationError.prototype)
  }
  serialize(): { message: string; } {
    return { message: 'user authorizationError' }
  }
}

