const path = require("path");
const fs = require("fs");
const db = require('../database/models');

const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  createProduct: async (req, res) => {
    try {
      const categories = await db.Category.findAll();

      const colors = await db.Color.findAll();

      res.render("admin/createProduct", { categories, colors })
    } catch (error) {
      res.send(error)
    }
  },
  create: async (req, res) => {
    try {
      const features = req.body.features.split("/");

      const questionInSale = +req.body.discount ? 1 : 0;

      const questionhighlight = req.body.highlight == "true" ? 1 : 0;

      const colors = typeof req.body.colors == "string" ? [req.body.colors] : req.body.colors;

      const productCreated = await db.Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount,
        highlight: questionhighlight,
        model: req.body.model,
        year: req.body.year,
        size: req.body.size,
        weight: req.body.weight,
        inSale: questionInSale,
        categories_id: req.body.category
      });

      db.ProductColor.bulkCreate(colors.map(color => {
        return {
          colors_id: color,
          products_id: productCreated.id
        }
      }))

      db.Feature.bulkCreate(features.map(feature => {
        return {
          name: feature,
          products_id: productCreated.id
        }
      }))

      db.Image.bulkCreate(req.files.map(file => {
        return {
          name: file.filename,
          products_id: productCreated.id
        }
      }))

      res.redirect("/");

    } catch (error) {
      res.send(error)
    }
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

    const questionInSale = +req.body.discount ? 1 : 0;

    const questionhighlight = req.body.highlight == "true" ? 1 : 0;

    const productToEditIndex = products.findIndex(
      (product) => product.id == id
    );

    const images = []

    req.files.forEach((file) => {
      images.push(file.filename);
    });

    const colors = typeof req.body.colors == "string" ? [req.body.colors] : req.body.colors;

    products[productToEditIndex] = {
      ...products[productToEditIndex],
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      images: images.length ? images : products[productToEditIndex].images,
      discount: req.body.discount,
      category: req.body.category,
      highlight: questionhighlight,
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
  delete: async (req, res) => {
    const id = req.params.id;

    const imagesInStorage = await db.Image.findAll({ where: { products_id: id } })

    imagesInStorage.forEach(image => {
      if (image != "defaultProduct.png") {
        fs.unlinkSync(path.join(__dirname, "../public/images/products/", image.name));
      }
    })

    db.Feature.destroy({ where: { products_id: id } })

    db.ProductColor.destroy({ where: { products_id: id } })

    db.Image.destroy({ where: { products_id: id } })

    await db.Product.destroy({ where: { id } })

    res.redirect("/")
  },
};

module.exports = controller;
