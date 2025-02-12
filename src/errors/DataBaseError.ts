import { CustomerError } from "../utils/customerError"

export class DataBaseError extends CustomerError {

  StatusCode = 500
  constructor() {
    super('Data base crash error')
    // 確保 DataBaseError 的 prototype 被正確設定
    // 這樣就可以使用 instanceof 來確認一個物件是否是 DataBaseError 的實例
    // 例如：const error = new DataBaseError()
    // console.log(error instanceof DataBaseError) // true
    // console.log(error instanceof Error) // true
    //否則會是 false
    Object.setPrototypeOf(this, DataBaseError.prototype)
    Error.captureStackTrace(this)
  }
  serialize(): { message: string } {
    return { message: 'DataBase Error' }
  }
}

