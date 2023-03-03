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

    const newId = products[products.length - 1].id + 1

    const productToPush = {
      id: newId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      colors: req.body.colors,
      model: req.body.model,
      year: req.body.year,
      size: req.body.size,
      weight: req.body.weight,
      features: req.body.features
    };
        
    products.push(productToPush);

    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2)); 
    
    res.render("/");
  },
  editProduct: (req, res) => {
    res.render("admin/editProduct");
  },
};

module.exports = controller;
