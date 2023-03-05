const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("In the another middleware");
  // res.send("<h1>Hello from express</h1>");

  // Serving HTML file
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  // Serving Template Engine:pug
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
