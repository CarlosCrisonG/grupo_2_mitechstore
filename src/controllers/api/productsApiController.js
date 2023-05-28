const db = require('../../database/models');

const controller = {
    list: async (req, res) => {
        try {
            const limit = 10;

            const pag = parseInt(req.query.pag) ? parseInt(req.query.pag) : 1

            const offset = limit * (pag - 1)

            const products = await db.Product.findAll({ limit, offset, include: { all: true } })

            const jsonRes = {
                meta: {
                    status: 200,
                    count: products.length,
                    url: req.originalUrl
                },
                data: products
            }

            if (req.query.pag > 1 && products.length == 10) {
                jsonRes.meta.next = "http://localhost:3000/api/products/?pag=" + (parseInt(req.query.pag) + 1)
            }

            if (req.query.pag > 1) {
                jsonRes.meta.previous = "http://localhost:3000/api/products/?pag=" + (parseInt(req.query.pag) - 1)
            }

            res.status(200).json(jsonRes)
        } catch (error) {
            res.status(400).json({
                status: 400,
                msg: "Bad request, try later...",
                errorMsg: error
            })
        }
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