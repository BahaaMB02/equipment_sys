const path = require('path');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const getDb = require('../utils/database').getDb;

router.get('/login', (req, res, next) => {
   res.render('login', { pageTitle: 'تسجيل الدخول', error: null });
});

router.post('/login', async (req, res, next) => {
    // Accept either identifier, username, or email from the form
    const identifier = req.body.identifier || req.body.username || req.body.email;
    const password = req.body.password;
    const db = getDb();
    try {
        // Find user by username or email
        const user = await db.collection('users').findOne({
            $or: [
                { username: identifier },
                { email: identifier }
            ]
        });
        if (!user) {
            return res.render('login', { pageTitle: 'تسجيل الدخول', error: 'اسم المستخدم أو البريد الإلكتروني غير صحيح' });
        }
        // Compare password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.render('login', { pageTitle: 'تسجيل الدخول', error: 'كلمة المرور غير صحيحة' });
        }
        req.session.username = user.username;
        res.redirect('/home');
    } catch (err) {
        console.error(err); // Add this line to see the actual error
        res.render('login', { pageTitle: 'تسجيل الدخول', error: 'حدث خطأ أثناء تسجيل الدخول' });
    }
});

module.exports = router;