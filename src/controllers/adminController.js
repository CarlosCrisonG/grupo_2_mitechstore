const path = require("path");
const fs = require('fs');

const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  createProduct: (req, res) => {
    res.render("admin/createProduct");
  },
  create: (req, res) => {
    const products = getProducts();

    const newId = products[products.length - 1].id + 1;

    const features = req.body.features.split("/");

    const questionInSale = +req.body.discount ? true : false;

    const images = [];

    req.files.forEach(file => {
      images.push(file.filename)
    });
    
    const productToPush = {
      id: newId,
      name: req.body.name,
      shortDescription: req.body.shortDescription,
      description: req.body.description,
      images: images.length ? images : "defaultProduct.png",
      price: req.body.price,
      discount: req.body.discount,
      category: req.body.category,
      highlight: req.body.highlight,
      colors: req.body.colors,
      model: req.body.model,
      year: req.body.year,
      size: req.body.size,
      weight: req.body.weight,
      features: features,
      inSale: questionInSale
    };

    products.push(productToPush);

    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

    res.redirect("/");
  },
  editProduct: (req, res) => {
    res.render("admin/editProduct");
  },
};

module.exports = controller;
