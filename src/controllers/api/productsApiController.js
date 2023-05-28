const db = require('../../database/models');

const controller = {
    list: async (req, res) => {

        const limit = 10;

        const pag = parseInt(req.query.pag) || 1

        const offset = limit * (pag - 1)

        const products = await db.Product.findAll({ limit, offset, include: { all: true } })

        const totalProductsInDB = await db.Product.count()

        if (products.length < 1) {
            return res.status(404).json({
                meta: {
                    status: 404
                },
                data: "Products not found"
            })
        }

        const productsWithUrlImage = products.map(product => {
            const url = product.images.map(image => ({ url: "http://localhost:3000/images/products/" + image.name }))

            return { fields: product, imagesUrl: url }
        })

        const jsonRes = {
            meta: {
                status: 200,
                count: productsWithUrlImage.length,
                totalProductsInDB,
                url: req.originalUrl
            },
            data: productsWithUrlImage
        }

        if (pag >= 1 && productsWithUrlImage.length == 10) {
            jsonRes.meta.next = "http://localhost:3000/api/products/?pag=" + (pag + 1)
        }

        if (pag > 1) {
            jsonRes.meta.previous = "http://localhost:3000/api/products/?pag=" + (pag - 1)
        }

        res.status(200).json(jsonRes)

    },
    detail: async (req, res) => {
        const id = req.params.id;

        const product = await db.Product.findOne({ where: { id }, include: { all: true } });

        if (!product) {
            return res.status(404).json({
                meta: {
                    status: 404
                },
                data: "product not found"
            });
        }

        const url = product.images.map(image => "http://localhost:3000/images/products/" + image.name)

        const productWithUrlImage = { fields: product, imagesUrl: url }

        const jsonRes = {
            meta: {
                status: 200,
                url: req.originalUrl
            },
            data: productWithUrlImage
        }

        res.status(200).json(jsonRes);
    }
}

module.exports = controller;