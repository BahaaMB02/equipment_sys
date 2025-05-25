const express = require('express');
const router = express.Router();
const getDb = require('../utils/database').getDb;
const { ObjectId } = require('mongodb'); // Add this line


// Admin-only middleware
function ensureAdmin(req, res, next) {
    if (req.session && req.session.role === 'admin') {
        return next();
    }
    res.status(403).send('غير مصرح لك بالدخول (Admin Only)');
}

router.get('/stores', async (req, res, next) => {
    try {
        const db = getDb();
        const reports = await db.collection('reports').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = {
            st1: 'تمام بمحتويات المخازن الاسبوعي',
            st2: 'كاوتش + زيوت + بطاريات',
            st3: 'مخازن قطع الغيار',
            st4:"شركات",
            _id: 'رقم التعريف'
        };

        res.render('stores', {
            pageTitle: 'المخازن',
            reports,
            columnNames,
            role: req.session.role // Pass the role to the view
        });
    } catch (err) {
        next(err);
    }
});

// Delete report (admin only)
router.post('/stores/delete', ensureAdmin, async (req, res, next) => {
    const db = getDb();
    const id = req.body.id;
    try {
        await db.collection('stores').deleteOne({ _id: require('mongodb').ObjectId(id) });
        res.redirect('/stores');
    } catch (err) {
        next(err);
    }
});


module.exports = router;