const express = require("express");
const path = require("path");
const staticFileImg = () => {
  express.static(path.join(__dirname, "./public"));
};
module.exports = staticFileImg;
