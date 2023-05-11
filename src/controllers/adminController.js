const path = require("path");
const fs = require("fs");
const db = require('../database/models');

const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  createProduct: async (req, res) => {
    const categories = await db.Category.findAll();

    const colors = await db.Color.findAll();

    res.render("admin/createProduct", { categories, colors });
  },
  create: async (req, res) => {
    req.files = req.files.length > 0 ? req.files : [{ filename: 'defaultProduct.png' }]

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
      };
    }));

    db.Feature.bulkCreate(features.map(feature => {
      return {
        name: feature,
        products_id: productCreated.id
      };
    }));

    db.Image.bulkCreate(req.files.map(file => {
      return {
        name: file.filename,
        products_id: productCreated.id
      };
    }));

    res.redirect("/");
  },
  editProduct: async (req, res) => {
    const id = req.params.id;

    const categories = await db.Category.findAll();

    const colors = await db.Color.findAll();

    const product = await db.Product.findOne({ include: { all: true }, where: { id } });

    res.render("admin/editProduct", { product, categories, colors });
  },
  edit: async (req, res) => {
    const id = req.params.id;

    const features = req.body.features.split("/");

    const questionInSale = +req.body.discount ? 1 : 0;

    const questionhighlight = req.body.highlight == "true" ? 1 : 0;

    const colors = typeof req.body.colors == "string" ? [req.body.colors] : req.body.colors;

    db.Product.update({
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
    }, { where: { id } });

    db.Feature.destroy({ where: { products_id: id } });

    db.ProductColor.destroy({ where: { products_id: id } });


    if (!(features.length == 1 && features[0] == "")) {
      await db.Feature.bulkCreate(features.map(feature => {
        return {
          name: feature,
          products_id: id
        };
      }));
    };

    if (colors != undefined) {
      await db.ProductColor.bulkCreate(colors.map(color => {
        return {
          colors_id: color,
          products_id: id
        };
      }));
    };

    if (req.files.length != 0) {
      const imagesInStorage = await db.Image.findAll({ where: { products_id: id } });

      imagesInStorage.forEach(image => {
        if (image.dataValues.name != "defaultProduct.png") {
          fs.unlinkSync(path.join(__dirname, "../public/images/products/", image.name));
        };
      });

      db.Image.destroy({ where: { products_id: id } });

      await db.Image.bulkCreate(req.files.map(file => {
        return {
          name: file.filename,
          products_id: id
        };
      }));
    };

    res.redirect(`/product/detail/${id}`);
  },
  delete: async (req, res) => {
    const id = req.params.id;

    const imagesInStorage = await db.Image.findAll({ where: { products_id: id }, raw: true });

    imagesInStorage.forEach(image => {
      if (image.name != "defaultProduct.png") {
        fs.unlinkSync(path.join(__dirname, "../public/images/products/", image.name));
      }
    })

    await db.Feature.destroy({ where: { products_id: id } });

    await db.ProductColor.destroy({ where: { products_id: id } });

    await db.Image.destroy({ where: { products_id: id } });

    await db.Product.destroy({ where: { id } });

    res.redirect("/");
  },
};

module.exports = controller;
