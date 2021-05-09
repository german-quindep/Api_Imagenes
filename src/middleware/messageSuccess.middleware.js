const messageSucces = require("../config/messageSuccess.config");
const MiddleMessaSuccess = {};
//MESSAGE SUCCESS
MiddleMessaSuccess.messagegetImage = (req, res, message, data) => {
  return res.json({ message: messageSucces(message).GetImage, data });
};
//GET ID MESSAGE
MiddleMessaSuccess.messageGetIdImage = (req, res, message, data) => {
  return res
    .status(200)
    .json({ message: messageSucces(message).GetIdImage, data });
};
//POST MESSAGE
MiddleMessaSuccess.messagePostImage = (req, res, message) => {
  return res
    .status(200)
    .json({ message: messageSucces(message).PostImage, file: req.file });
};
//PUT MESSAGE
MiddleMessaSuccess.messagePutImage = (req, res, message, data) => {
  return res
    .status(200)
    .json({ message: messageSucces(message).PutImage, data });
};
//DELETE MESSAGES
MiddleMessaSuccess.messageDeleteImage = (req, res, message, data) => {
  return res
    .status(200)
    .json({ message: messageSucces(message).DeleteImage, data });
};

module.exports = MiddleMessaSuccess;
