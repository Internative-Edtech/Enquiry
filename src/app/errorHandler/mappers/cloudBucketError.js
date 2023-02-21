const CustomError = require("../CustomError");
const { STATUS_CODES } = require("../constants");

module.exports = error => {
  if (error.code && error.message) {
    const statusCode = error.code;
    const errorCode = STATUS_CODES[error.code];
    const detail = error.message;
    const fieldName = "";
    return CustomError.create({
      httpCode: statusCode,
      message: detail,
      property: fieldName,
      code: errorCode
    });
  }
  return undefined;
};
