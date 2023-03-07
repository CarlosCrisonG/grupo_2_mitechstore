const path = require("path");
const fs = require("fs");

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

    const newId = products.length ? products[products.length - 1].id + 1 : 1;

    const features = req.body.features.split("/");

    const questionInSale = +req.body.discount ? true : false;

    const images = [];

    const colors = typeof req.body.colors == "string" ? [req.body.colors] : req.body.colors;

    req.files.forEach((file) => {
      images.push(file.filename);
    });

    const productToPush = {
      id: newId,
      name: req.body.name,
      description: req.body.description,
      images: images.length ? images : ["defaultProduct.png"],
      price: req.body.price,
      discount: req.body.discount,
      category: req.body.category,
      highlight: req.body.highlight,
      colors,
      model: req.body.model,
      year: req.body.year,
      size: req.body.size,
      weight: req.body.weight,
      features: features,
      inSale: questionInSale,
    };

    products.push(productToPush);

    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

    res.redirect("/");
  },
  editProduct: (req, res) => {
    const id = req.params.id;

    const products = getProducts();

    const product = products.find((product) => product.id == id);

    res.render("admin/editProduct", { product });
  },
  edit: (req, res) => {
    const id = req.params.id;

    const products = getProducts();

    const features = req.body.features.split("/");

    const questionInSale = +req.body.discount ? true : false;

    const productToEditIndex = products.findIndex(
      (product) => product.id == id
    );

    const colors = typeof req.body.colors == "string" ? [req.body.colors] : req.body.colors;

    products[productToEditIndex] = {
      ...products[productToEditIndex],
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount,
      category: req.body.category,
      highlight: req.body.highlight,
      colors,
      model: req.body.model,
      year: req.body.year,
      size: req.body.size,
      weight: req.body.weight,
      features: features,
      inSale: questionInSale,
    };

    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

    res.redirect(`/product/detail/${id}`);
  },
  delete: (req, res) => {
    const id = req.params.id;

    const products = getProducts();

    const productToDeleteIndex = products.findIndex(product => product.id == id);

    products.splice(productToDeleteIndex,1);

    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

    res.redirect("/");
  },
};

module.exports = controller;
