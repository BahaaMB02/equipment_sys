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
            image4:"مؤجر",
            _id: 'رقم التعريف'
        };

        res.render('gredarkom', { pageTitle: 'صفحه تفاصيل آله تسوية', gredarkom, columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getAlabIV = async (req, res, next) => {
    try {
        const db = getDb();
        const alabiv= await db.collection('alabiv').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('alabiv', { pageTitle: ' صفحه تفاصيل قلاب', alabiv , columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getAlabMP3 = async (req, res, next) => {
    try {
        const db = getDb();
        const alabmp3= await db.collection('alabmp3').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('alabmp3', { pageTitle: 'صفحه تفاصيل قلاب', alabmp3 , columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getAlabMP4 = async (req, res, next) => {
    try {
        const db = getDb();
        const alabmp4= await db.collection('alabmp4').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('alabmp4', { pageTitle: 'صفحه تفاصيل قلاب', alabmp4 , columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getFenshr2 = async (req, res, next) => {
    try {
        const db = getDb();
        const fenshr2= await db.collection('fenshr2').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('fenshr2', { pageTitle: 'صفحه تفاصيل آله فرش أسفلت', fenshr2, columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getFenshr3 = async (req, res, next) => {
    try {
        const db = getDb();
        const fenshr3= await db.collection('fenshr3').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('fenshr3', { pageTitle: 'صفحه تفاصيل آله فرش أسفلت', fenshr3, columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getAsphltD = async (req, res, next) => {
    try {
        const db = getDb();
        const asphltd= await db.collection('asphltd').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('asphltd', { pageTitle: 'صفحه تفاصيل هراس أسفلت', asphltd , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getAsphltH = async (req, res, next) => {
    try {
        const db = getDb();
        const asphlth= await db.collection('asphlth').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('asphlth', { pageTitle: 'صفحه تفاصيل هراس أسفلت', asphlth , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getAsphltV = async (req, res, next) => {
    try {
        const db = getDb();
        const asphltv= await db.collection('asphltv').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('asphltv', { pageTitle: 'صفحه تفاصيل هراس أسفلت', asphltv , columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getTorabD = async (req, res, next) => {
    try {
        const db = getDb();
        const torabd= await db.collection('torabd').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('torabd', { pageTitle: 'صفحه تفاصيل هراس تراب', torabd , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getTorabH = async (req, res, next) => {
    try {
        const db = getDb();
        const torabh= await db.collection('torabh').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('torabh', { pageTitle: 'صفحه تفاصيل هراس تراب', torabh , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getTorabB = async (req, res, next) => {
    try {
        const db = getDb();
        const torabb= await db.collection('torabb').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            _id: 'رقم التعريف'
        };

        res.render('torabb', { pageTitle: 'صفحه تفاصيل هراس تراب', torabb , columnNames });
    } catch (err) {
        next(err);
    }
};