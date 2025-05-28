require('dotenv').config();

const path = require('path');
const express = require('express');
const { mongoConnect } = require('./utils/database');
const User = require('./models/user'); // Make sure this path is correct
const getDb = require('./utils/database').getDb;
const session = require('express-session');
const MongoStore = require('connect-mongo'); // Add this line

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI, // FIX: use MONGO_URI (uppercase, matches your .env)
    ttl: 14 * 24 * 60 * 60 // مدة الجلسة (14 يوم)
  })
}));
// Logging middleware
app.use((req, res, next) => {
    const user = req.session && req.session.username ? req.session.username : 'Guest';
    console.log(`[${new Date().toISOString()}] User: ${user} - ${req.method} ${req.originalUrl}`);
    next();
});

// Authentication middleware
async function ensureAuthenticated(req, res, next) {
    if (req.session && req.session.username) {
        try {
            const db = getDb();
            const user = await db.collection('users').findOne({ username: req.session.username });
            if (user) {
                req.session.role = user.role || 'user'; // Save role in session (default to 'user')
                return next();
            }
        } catch (err) {
            return next(err);
        }
    }
    res.redirect('/login');
}

// Admin-only middleware
function ensureAdmin(req, res, next) {
    if (req.session && req.session.role === 'admin') {
        return next();
    }
    res.status(403).send('غير مصرح لك بالدخول (Admin Only)');
}

// Routes
const signupRoutes = require('./routes/signup');
const loginData = require('./routes/login');
const repairData = require('./routes/repair');
const logoutRoutes = require('./routes/logout');
const storesRoutes = require('./routes/stores');
const homeRoutes = require('./routes/home');
const tamamRoutes = require('./routes/tamam');
const driversRoutes = require('./routes/drivers');
const equipmentRoutes = require('./routes/equipment');


app.use(loginData);
app.use(logoutRoutes);

// Admin-only: signup
app.use('/signup', ensureAuthenticated, ensureAdmin, signupRoutes);

// Protect all routes below this line (normal users and admins)
app.use(ensureAuthenticated);

app.use(repairData);
app.use(storesRoutes);
app.use(homeRoutes);
app.use(equipmentRoutes);
app.use(tamamRoutes);
app.use(driversRoutes);
// Error handler (add this at the end)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


mongoConnect(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});