const express = require("express");
const path = require("path");
const fs = require('fs');

const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  productDetail: (req, res) => {
    const id = req.params.id;

    const products = getProducts();

    const product = products.find(product => product.id == id);

    res.render("product/productDetail", { product })
  },
  productList: (req, res) => {
    let allProducts = getProducts();

    if (req.query.category) {

      if (req.query.category == "computadoras") {
        let categoryToShow = allProducts.filter(product => product.category == req.query.category)
        let categoryTitle = "Computadoras";
        return res.render("product/listaDeProducto", { products: categoryToShow, categoryTitle });

      } else if (req.query.category == "celulares") {
        let categoryToShow = allProducts.filter(product => product.category == req.query.category)
        let categoryTitle = "Celulares";
        return res.render("product/listaDeProducto", { products: categoryToShow, categoryTitle });

      } else if (req.query.category == "accesorios") {
        let categoryToShow = allProducts.filter(product => product.category == req.query.category)
        let categoryTitle = "Accesorios";
        return res.render("product/listaDeProducto", { products: categoryToShow, categoryTitle });

      } else if (req.query.category == "electrodomesticos") {
        let categoryToShow = allProducts.filter(product => product.category == req.query.category)
        let categoryTitle = "Electrodomésticos";
        return res.render("product/listaDeProducto", { products: categoryToShow, categoryTitle });
      }
      else if (req.query.category == "cuidadoPersonal") {
        let categoryToShow = allProducts.filter(product => product.category == req.query.category)
        let categoryTitle = "Cuidado Personal";
        return res.render("product/listaDeProducto", { products: categoryToShow, categoryTitle });
      }
    } else {
      let categoryTitle = "Todos los productos";
      return res.render("product/listaDeProducto", { products: allProducts, categoryTitle });
    }

  },
  productCart: (req, res) => {
    res.render("product/productCart")
  },
};

module.exports = controller;
