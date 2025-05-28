const { getDb } = require('../utils/database');


exports.getBldozercat = async (req, res, next) => {
    try {
        const db = getDb();
        const bldozercat = await db.collection('bldozercat').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            image3:"صور بطاقه السائق",
            _id: 'رقم التعريف'
        };

        res.render('bldozercat', { pageTitle: 'صفحه تفاصيل آله جرف', bldozercat, columnNames });
    } catch (err) {
        next(err);
    }
};

exports.getBldozerkom = async (req, res, next) => {
    try {
        const db = getDb();
        const bldozerkom = await db.collection('bldozerkom').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            image3:"صور بطاقه السائق",
            _id: 'رقم التعريف'
        };

        res.render('bldozerkom', { pageTitle: 'صفحه تفاصيل آله جرف', bldozerkom, columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getGredarcat = async (req, res, next) => {
    try {
        const db = getDb();
        const gredarcat= await db.collection('gredarcat').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            image3:"صور بطاقه السائق",
            image4:"مؤجر",
            _id: 'رقم التعريف'
        };

        res.render('gredarcat', { pageTitle: 'صفحه تفاصيل آله تسوية', gredarcat, columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getGredarkom = async (req, res, next) => {
    try {
        const db = getDb();
        const gredarkom= await db.collection('gredarkom').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            image3:"صور بطاقه السائق",
            image4:"مؤجر",
            _id: 'رقم التعريف'
        };

        res.render('gredarkom', { pageTitle: 'صفحه تفاصيل آله تسوية', gredarkom, columnNames });
    } catch (err) {
        next(err);
    }
};