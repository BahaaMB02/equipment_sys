function ensureAdmin(req, res, next) {
    if (req.session && req.session.role === 'admin') {
        return next();
    }
    res.status(403).send('غير مصرح لك بالدخول (Admin Only)');
}
module.exports = ensureAdmin;
