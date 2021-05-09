const messageSucces = (data) => {
  const message = {
    GetImage: `Bienvenido al subidor de ${data}`,
    GetIdImage:`Se encontro el id ${data}`,
    PostImage: `Se a ingresado una nueva ${data}`,
    PutImage: `Se a actualizado una nueva ${data}`,
    DeleteImage: `Se a eliminada la ${data}`,
  };
  return message;
};
module.exports = messageSucces;
