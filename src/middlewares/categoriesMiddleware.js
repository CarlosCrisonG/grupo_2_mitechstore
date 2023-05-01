const db = require('../database/models');

async function categoriesMiddleware(req, res, next) {
    const categories = await db.Category.findAll();

    if (categories.length != 0) {
        res.locals.headerCategories = categories
    };
    
    next();
}

module.exports = categoriesMiddleware;