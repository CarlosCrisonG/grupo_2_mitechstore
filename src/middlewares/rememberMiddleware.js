const db = require('../database/models');

async function remember(req, res, next) {
    if (req.cookies.userCookie && !req.session.userLogged) {
        const userCookie = JSON.parse(req.cookies.userCookie);

        const userInDB = await db.User.findOne({ where: { id: userCookie.id } });

        userInDB ? req.session.userLogged = userCookie : null;
    }

    next();
}

module.exports = remember;