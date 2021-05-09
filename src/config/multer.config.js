const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const messagesErrors = require("../messages/ErrorMessages.messages");
//PARA PASARLE UNA SOLA DEL MULTER
const storage = multer.diskStorage({
  //EN DONDE IRAN LAS IMAGENES
  destination: path.join(__dirname, "../public/img/upload"),
  //DARLE UN NOMBRE A LAS IMAGENES
  filename: (req, file, cb, filename) => {
    //CB=CALLBACK
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
const uploadImg = multer({
  storage,
  limits: { fileSize: 2000000   /*2MB*/ },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/; //TIPOS DE IMAGENES QUE ACEPTA
    const mimetype = filetypes.test(file.mimetype); //COMPROBAR LOS ARCHIVOS
    const extname = filetypes.test(path.extname(file.originalname));
    mimetype && extname
      ? cb(null, true)
      : cb(messagesErrors.ErrorFormato);
  },
}).single("file");
module.exports = uploadImg;
