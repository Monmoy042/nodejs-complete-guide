const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // console.log("In the another middleware");
  // res.send(
  //   "<form action='/admin/product' method='POST'><input type='text' name='title' ></input><button type='submit'>Add Product</button></form>"
  // );
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
