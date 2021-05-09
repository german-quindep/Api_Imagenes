const modelImage = require("../models/img.models.js");
const imgFormModel = {};
//CREANDO FORM DE IMG
imgFormModel.createUpdateForm = (req, res) => {
  if (req.params.id) {
    const Updateimg = {
      title: req.body.title,
      description: req.body.description,
      filename: req.file.filename,
      path: "/img/upload/" + req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
    };
    return Updateimg;
  } else {
    const image = new modelImage();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = "/img/upload/" + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    return image;
  }
};
//TRAER SOLO UNA IMG
imgFormModel.GetIdForm = async (id) => {
  const image = await modelImage.findById(id);
  return image;
};
//ELIMINAR
imgFormModel.DeleteIdForm = async (id) => {
  const image = await modelImage.findByIdAndDelete(id);
  return image;
};
//ACTUALIZAR
imgFormModel.UpdateIdForm = async (id, img) => {
  const image = await modelImage.findByIdAndUpdate(id, { $set: img });
  return image;
};
module.exports = imgFormModel;
