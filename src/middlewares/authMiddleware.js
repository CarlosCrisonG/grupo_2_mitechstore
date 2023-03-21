function authMiddleware(req, res, next) {
    const userLogged = req.session.userLogged;

    if (userLogged) {
        res.locals.user = userLogged;
    }

    next();
}

module.exports = authMiddleware;