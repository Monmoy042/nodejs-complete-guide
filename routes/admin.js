const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // console.log("In the another middleware");
  // res.send(
  //   "<form action='/admin/product' method='POST'><input type='text' name='title' ></input><button type='submit'>Add Product</button></form>"
  // );

  // Serving html files
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));

  // Serving template engine file pug
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
