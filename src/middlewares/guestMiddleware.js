function guestMiddleware (req, res, next) {
 if(req.session.userLogged) {
    res.redirect("/users/profile")
 }
 next();
}

module.exports = guestMiddleware;