const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/img_mean", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("connect db"))
  .catch((err) => console.log(err));
