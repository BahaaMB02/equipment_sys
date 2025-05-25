const express = require('express');
const { ObjectId } = require('mongodb'); // Add this line
const { getDb } = require('../utils/database');
const router = express.Router();


router.get('/tamam', async (req, res, next) => {
    try {
        const db = getDb();
        const tamam = await db.collection('tamam').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = {
            st1: 'تمام معدات ذاتي ك۷۱ طرق ',
            st2: 'يوميه عدديه معدات ك۷۱ طرق ',
            st3: 'يوميه حاله فنية ك۷۱ طرق بتاريخ الصرف',
            st4:"تمام أجازات السائقين",
            st5:"يوميه تحرك",
            _id: 'رقم التعريف'
        };

        res.render('tamam', { pageTitle: 'تمام المعدات', tamam, columnNames });
    } catch (err) {
        next(err);
    }
});

router.post('/tamam/delete', async (req, res, next) => {
    const id = req.body.id;
    const db = getDb();
    await db.collection('tamam').deleteOne({ _id: new ObjectId(id) });
    res.redirect('/tamam');
});


module.exports = router;