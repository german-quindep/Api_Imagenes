const { unlink } = require("fs-extra");
const path = require("path");
//FORM
const {
  createUpdateForm,
  GetIdForm,
  DeleteIdForm,
  UpdateIdForm,
} = require("../shared/img.Form.js");
//MIDDLEWARE
const {
  messagegetImage,
  messagePostImage,
  messageGetIdImage,
  messagePutImage,
  messageDeleteImage,
} = require("../middleware/messageSuccess.middleware.js");
const configImg = require("../config/imgRoutes.config");
const ctrlImga = {};
//GET
ctrlImga.getUploadImg = async (req, res) => {
  return messagegetImage(req, res, configImg.ModelsAndMessage);
};
//POST
ctrlImga.crearImagen = async (req, res) => {
  const image = createUpdateForm(req, res);
  const saveImage = await image.save();
  return messagePostImage(req, res, configImg.ModelsAndMessage, saveImage);
};
//GET ID IMAGE
ctrlImga.mostrarImgId = async (req, res) => {
  const { id } = req.params;
  const img = await GetIdForm(id);
  return messageGetIdImage(req, res, configImg.ModelsAndMessage, img);
};
//PUT
ctrlImga.editImg = async (req, res) => {
  const { id } = req.params;
  const imageId = await GetIdForm(id);
  await unlink(path.resolve(configImg.rutaIMG + imageId.path)); //ELIMINO LA IMAGEN ANTERIOR
  const image = createUpdateForm(req, res);
  const updateImg = await UpdateIdForm(id, image);
  return messagePutImage(req, res, configImg.ModelsAndMessage, updateImg);
};
//DELETE
ctrlImga.deletImg = async (req, res) => {
  const { id } = req.params;
  const image = await GetIdForm(id);
  const deleteImg = await DeleteIdForm(id);
  await unlink(path.resolve(configImg.rutaIMG + image.path));
  return messageDeleteImage(req, res, configImg.ModelsAndMessage, deleteImg);
};

module.exports = ctrlImga;
