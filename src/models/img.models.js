const { Schema, model } = require("mongoose");
const configImg = require("../config/imgRoutes.config.js");
//SE CREA EL SCHEMA DE IMG
const modelImg = new Schema({
  title: { type: String },
  description: { type: String },
  filename: { type: String },
  path: { type: String },
  originalname: { type: String },
  mimetype: { type: String },
  size: { type: Number },
  create_at: { type: Date, default: Date.now() },
});

module.exports = model(configImg.ModelsAndMessage, modelImg);
