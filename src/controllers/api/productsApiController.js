const db = require('../../database/models');

const controller = {
    list: async (req, res) => {
        
        const limit = 10;

        const pag = parseInt(req.query.pag) ? parseInt(req.query.pag) : 1

        const offset = limit * (pag - 1)

        const products = await db.Product.findAll({ limit, offset, include: { all: true } })

        const productsWithUrlImage = products.map(product => {
            const url = product.images.map(image => ({url: "http://localhost:3000/images/products/" + image.name }))

            return { product, imagesUrl: url }
        })

        const jsonRes = {
            meta: {
                status: 200,
                count: productsWithUrlImage.length,
                url: req.originalUrl
            },
            data: productsWithUrlImage
        }

        if (req.query.pag > 1 && productsWithUrlImage.length == 10) {
            jsonRes.meta.next = "http://localhost:3000/api/products/?pag=" + (parseInt(req.query.pag) + 1)
        }

        if (req.query.pag > 1) {
            jsonRes.meta.previous = "http://localhost:3000/api/products/?pag=" + (parseInt(req.query.pag) - 1)
        }

        res.status(200).json(jsonRes)

    },
    detail: async (req, res) => {

        let statusRes = 200;

        const id = req.params.id;

        const product = await db.Product.findOne({ where: { id }, include: { all: true } });

        const jsonRes = {
            meta: {
                status: 200,
                url: req.originalUrl
            },
            data: product
        }

        if (!product) {
            statusRes = 404;

            jsonRes.meta.status = 404

            jsonRes.data = "product not found"
        }

        res.status(statusRes).json(jsonRes);
    }
}

module.exports = controller;