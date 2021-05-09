const messagesErrors = require("../messages/ErrorMessages.messages.js");
const errorsMulter = (err, req, res, next) => {
  switch (err.code) {
    case "LIMIT_FILE_SIZE":
      res.status(400).json({ error: messagesErrors.ErrorTamano });
      break;
    default:
      res.status(400).json({ error: err });
      break;
  }
};
module.exports = errorsMulter;
