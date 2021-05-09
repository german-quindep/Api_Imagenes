const { Router } = require("express");
const router = Router();
const {
  crearImagen,
  mostrarImgId,
  deletImg,
  editImg,
  getUploadImg,
} = require("../controllers/img.controllers");
router.get("/upload", getUploadImg);
router.post("/upload", crearImagen);
//EDIT
router.put("/upload/:id", editImg);
//GET
router.get("/upload/:id", mostrarImgId);
//ELIMINAR
router.delete("/upload/:id", deletImg);
module.exports = router;
