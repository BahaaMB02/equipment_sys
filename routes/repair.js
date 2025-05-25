const express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/database');
const router = express.Router();

// Admin-only middleware (define here for reuse)
function ensureAdmin(req, res, next) {
    if (req.session && req.session.role === 'admin') {
        return next();
    }
    res.status(403).send('غير مصرح لك بالدخول (Admin Only)');
}

router.get('/repair', async (req, res, next) => {
    try {
        const db = getDb();
        const repair = await db.collection('repair').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = {
            st1: 'بيان الاعمال ك۷۱ طرق',
            st2: 'بيان صيانات ك۷۱ طرق',
            st3: 'تمام صيانات معدات ك۷۱ طرق',
            _id: 'رقم التعريف'
        };

        res.render('repair', { pageTitle: 'الصيانات', repair, columnNames });
    } catch (err) {
        next(err);
    }
});

router.post('/repair/delete', ensureAdmin, async (req, res, next) => {
    const id = req.body.id;
    const db = getDb();
    await db.collection('repair').deleteOne({ _id: new ObjectId(id) });
    res.redirect('/repair');
});


module.exports = router;