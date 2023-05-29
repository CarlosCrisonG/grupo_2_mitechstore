const db = require('../../database/models');

const controller = {
    list: async (req, res) => {

        const limit = parseInt(req.query.limit) || 10;

        const page = parseInt(req.query.page) || 1;

        const offset = limit * (page - 1);

        const products = await db.Product.findAll({ limit, offset, include: { all: true } });

        const totalProductsInDB = await db.Product.count();

        const limitPag = Math.ceil(totalProductsInDB / limit);


        if (products.length < 1 || page > limitPag) {
            return res.status(404).json({
                meta: {
                    status: 404
                },
                data: "Products not found"
            });
        }

        const productsWithUrlImage = products.map(product => {
            const url = product.images.map(image => ({ url: "http://localhost:3000/images/products/" + image.name }));

            return { ...product.get(), imagesUrl: url };
        })

        const jsonRes = {
            meta: {
                status: 200,
                url: req.originalUrl,
                count: productsWithUrlImage.length,
                limit,
                totalProductsInDB,
                total_pages: limitPag,
                page
            },
            data: productsWithUrlImage
        }


        if (page >= 1 && productsWithUrlImage.length == 10 || page < limitPag) {
            jsonRes.meta.next = "http://localhost:3000/api/products/?pag=" + (page + 1);
        }

        if (page > 1) {
            jsonRes.meta.previous = "http://localhost:3000/api/products/?pag=" + (page - 1);
        }

        res.status(200).json(jsonRes);
    },
    detail: async (req, res) => {
        const id = req.params.id;

        const product = await db.Product.findByPk(id, { include: { all: true } });

        if (!product) {
            return res.status(404).json({
                meta: {
                    status: 404
                },
                data: "product not found"
            });
        }

        const url = product.images.map(image => "http://localhost:3000/images/products/" + image.name);

        const productWithUrlImage = { ...product.get(), imagesUrl: url };

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