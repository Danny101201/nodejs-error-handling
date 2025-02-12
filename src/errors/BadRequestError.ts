import { CustomerError } from "../utils/customerError"

export class BadRequestError extends CustomerError {
  StatusCode = 400
  constructor(public message: string) {
    super(message)
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }
  serialize(): { message: string } {
    return { message: this.message }
  }
}

