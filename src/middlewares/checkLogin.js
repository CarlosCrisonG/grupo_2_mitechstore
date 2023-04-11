function checkLogin(req, res, next) {
    if(!req.session.userLogged) {
        return res.redirect("/users/login")
    }
    next();
}

module.exports = checkLogin;