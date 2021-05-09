const messageConfig = require("./configError.messages.js");
const messagesErrors = {
  ErrorFormato: `Error la imagen soporta formato ${messageConfig.ErrorImg}`,
  ErrorTamano: `Solo se admite tamaño maximo de ${messageConfig.ErrorMax}`,
};
module.exports = messagesErrors;
