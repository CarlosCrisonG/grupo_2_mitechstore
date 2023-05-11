const db = require('../database/models');

async function categoriesMiddleware(req, res, next) {
    if (!req.cookies.categories) {
        const categories = await db.Category.findAll()
        res.cookie("categories", JSON.stringify(categories), { maxAge: 2880000000 });
        res.locals.headerCategories = categories
    } else {
        res.locals.headerCategories = JSON.parse(req.cookies.categories)
    }

    next();
}

module.exports = categoriesMiddleware;