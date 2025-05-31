const express = require('express');
const { ObjectId } = require('mongodb'); // Add this line
const { getDb } = require('../utils/database');
const router = express.Router();


router.get('/drivers', async (req, res, next) => {
    try {
        const db = getDb();
        const drivers = await db.collection('drivers').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = {
            st1: 'سائقين آله جرف',
            st2: 'سائقين آله تسوية',
            st11:'سائقين آله فرش أسفلت',
            st3: 'سائقين بوبكات',
            st4:"سائقين جرار مكنسه",
            st5:"سائقين حفار",
            st6: 'سائقين رافع أتربه ',
            st7: 'سائقين قلاب ',
            st8: 'سائقين مكنسه ممرات',
            st9: "سائقين هراس أسفلت",
            st10:"سائقين هراس تراب",
            _id: 'رقم التعريف'
        };

        res.render('drivers', { pageTitle: 'بيانات السائقين', drivers, columnNames });
    } catch (err) {
        next(err);
    }
});




module.exports = router;