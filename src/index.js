const express = require("express");
const morgan = require("morgan");
const uploadImg = require("./config/multer.config");
const staticFileImg = require("./config/staticFileImg.config.js");
const errorsMulter = require("./middleware/errorsMulter.middleware");
//INITIALIZATIONS
const app = express();
require("./database");
//SETTINGS
app.set("port", process.env.PORT || 3000);
//MIDDLEWEARS
app.use(morgan("dev"));
app.use(uploadImg);
app.use(errorsMulter);

//FORM
app.use(express.urlencoded({ extended: false }));
//ROUTES
app.use("/img", require("./routes/images.routes.js"));
//STATIC FILES
app.use(staticFileImg);
//START SERVES
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
