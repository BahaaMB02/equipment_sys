const express = require('express');
const router = express.Router();
const getDb = require('../utils/database').getDb;

router.get('/verify-email', async (req, res) => {
    const { token } = req.query;
    const db = getDb();
    const user = await db.collection('users').findOne({ verificationToken: token });
    if (!user) {
        return res.send('Invalid or expired verification link.');
    }
    await db.collection('users').updateOne(
        { _id: user._id },
        { $set: { isVerified: true }, $unset: { verificationToken: "" } }
    );
    res.send('Email verified! You can now log in.');
});

module.exports = router;
