const path = require('path');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const getDb = require('../utils/database').getDb;

router.get('/', (req, res, next) => {
    res.render('signup', { pageTitle: 'إنشاء حساب', error: null });
});

router.post('/', async (req, res, next) => {
    const { username, email, password, role } = req.body;
    const db = getDb();
    try {
        // Check for existing user
        const existing = await db.collection('users').findOne({
            $or: [{ username }, { email }]
        });
        if (existing) {
            return res.render('signup', { pageTitle: 'إنشاء حساب', error: 'اسم المستخدم أو البريد الإلكتروني مستخدم بالفعل' });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create user (no verification)
        await db.collection('users').insertOne({
            username,
            email,
            password: hashedPassword,
            role: role === 'admin' ? 'admin' : 'user'
        });
        req.session.username = username;
        req.session.role = role === 'admin' ? 'admin' : 'user';
        res.redirect('/home');
    } catch (err) {
        res.render('signup', { pageTitle: 'إنشاء حساب', error: 'حدث خطأ أثناء إنشاء الحساب' });
    }
});

// Utility route for admin promotion (for development/maintenance only)
// Visit /make-admin?username=USERNAME to promote a user to admin
router.get('/make-admin', async (req, res) => {
    const db = getDb();
    // Remove spaces from username if present in URL
    const username = (req.query.username || '').trim();
    if (!username) {
        return res.send('يرجى تحديد اسم المستخدم ?username=...');
    }
    const result = await db.collection('users').updateOne(
        { username },
        { $set: { role: 'admin' } }
    );
    if (result.modifiedCount === 1) {
        res.send(`تم ترقية المستخدم ${username} إلى مشرف (admin)`);
    } else {
        res.send('المستخدم غير موجود أو لم يتم التعديل.');
    }
});

module.exports = router;
