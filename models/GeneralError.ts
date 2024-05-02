export default class GeneralError extends Error {
  public detail: object;

  public httpCode: number;

  public errorCode: number;

  public message: string;

  constructor(type: string, errorCode: number, message: string, httpCode: number, detail: object) {
    super(`Error ${type} - ${Object.keys(detail).length ? JSON.stringify(detail) : detail}`);
    this.errorCode = errorCode;
    this.message = message;
    this.httpCode = httpCode;
    this.detail = detail;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GeneralError.prototype);
  }

  getMessageLog() {
    return JSON.stringify(this);
  }

  toJSON() {
    return {
      error_code: this.errorCode,
      message: this.message,
      detail: this.detail,
    };
  }
}
