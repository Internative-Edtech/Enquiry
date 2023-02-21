/* eslint-disable no-underscore-dangle */

const { formatDetail } = require("./helpers");
const { STATUS_CODES, STATUS_TEXTS } = require("./constants");

module.exports = class CustomError extends Error {
  constructor(httpCode, errors) {
    super();
    this._code = httpCode;
    this._errors = this.getErrorArr(errors);
  }

  getErrorArr(errors) {
    if (!errors || !errors?.length) {
      return [
        {
          message: STATUS_TEXTS[this._code],
          code: STATUS_CODES[this._code]
        }
      ];
    }
    return errors;
  }

  get code() {
    return this._code;
  }

  get response() {
    return {
      errors: this._errors
    };
  }

  static create({ httpCode, message, property, code }) {
    const errors = [this.parse(message, property, code)];
    return new CustomError(httpCode, errors);
  }

  static createHttpError({ httpCode, errorResponse, downstream_system }) {
    const errors = [];
    switch (downstream_system) {
      case "some-service":
        // Add downstream service specific Error Parsing Logic here
        errors.push({
          code: `SOME_SERVICE_${STATUS_CODES[httpCode]}`,
          message: errorResponse?.message
        });
        break;
      default:
        errors.push({
          code: "INTERNAL_SERVER_ERROR",
          message: errorResponse?.message
        });
    }
    return new CustomError(httpCode, errors);
  }

  static parse(message, property, code) {
    return {
      message: formatDetail(message),
      ...(property && { property }),
      code
    };
  }
};
