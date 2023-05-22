const db = require('../database/models');

async function remember(req, res, next) {
    if (req.session.userLogged) {
        return next();
    }
    if (req.cookies.userCookie) {
        const userCookie = JSON.parse(req.cookies.userCookie);

        const userInDB = await db.User.findOne({ where: { id: userCookie.id }, attributes: {exclude: ["password"]} });

        userInDB ? req.session.userLogged = userCookie : null;

        res.locals.user = userInDB;
    }

    next();
}

module.exports = remember;