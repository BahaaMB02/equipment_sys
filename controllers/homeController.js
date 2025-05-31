const { getDb } = require('../utils/database');

exports.getHome = (req, res) => {
    res.render('home', {
        username: req.session.username,
        pageTitle: 'الصفحه الرئيسيه'
    });
};
///////////////////////////////////////////
exports.getBldozer = (req, res) => {
    res.render('bldozer', {
        pageTitle: 'آله جرف',
    });
};
///////////////////////////////////////////
exports.getGredar = (req, res) => {
    res.render('gredar', {
        pageTitle: 'آله تسوية',
    });
};

///////////////////////////////////////////
exports.getAlab = async (req, res, next) => {
        res.render('alab', {
        pageTitle: 'قلاب',
    });
};
///////////////////////////////////////////
exports.getFenshr = async (req, res, next) => {
        res.render('fenshr', {
        pageTitle: 'آله فرش أسفلت',
    });
};

///////////////////////////////////////////
exports.getAsphlt = async (req, res, next) => {
        res.render('asphlt', {
        pageTitle: 'هراس أسفلت',
    });

};
///////////////////////////////////////////
exports.getTorab = async (req, res, next) => {
         res.render('torab', {
        pageTitle: 'هراس تراب',
    });
};
///////////////////////////////////////////
exports.getLodar = async (req, res, next) => {
    try {
        const db = getDb();
        const lodar = await db.collection('lodar').find().toArray();

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

        res.render('lodar', { pageTitle: 'صفحه تفاصيل رافع أتربة', lodar, columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////

///////////////////////////////////////////
exports.getBobcat = async (req, res, next) => {
    try {
        const db = getDb();
        const bobcat= await db.collection('bobcat').find().toArray();

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

        res.render('bobcat', { pageTitle: 'صفحه تفاصيل بوبكات', bobcat, columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getGararmaknsa = async (req, res, next) => {
    try {
        const db = getDb();
        const gararmaknsa= await db.collection('gararmaknsa').find().toArray();

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

        res.render('gararmaknsa', { pageTitle: 'صفحه تفاصيل جرار مكنسة', gararmaknsa, columnNames });
    } catch (err) {
        next(err);
    }
};


///////////////////////////////////////////
exports.getHafar = async (req, res, next) => {
    try {
        const db = getDb();
        const hafar= await db.collection('hafar').find().toArray();

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

        res.render('hafar', { pageTitle: 'صفحه تفاصيل حفار', hafar, columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getGarar40m = async (req, res, next) => {
    try {
        const db = getDb();
        const garar40m= await db.collection('garar40m').find().toArray();

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

        res.render('garar40m', { pageTitle: 'صفحه تفاصيل جرار ٤٠م ', garar40m, columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getDaghet = async (req, res, next) => {
    try {
        const db = getDb();
        const daghet= await db.collection('daghet').find().toArray();

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

        res.render('daghet', { pageTitle: 'صفحه تفاصيل ضاغط هواء ', daghet, columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getFontas = async (req, res, next) => {
    try {
        const db = getDb();
        const fontas= await db.collection('fontas').find().toArray();

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

        res.render('fontas', { pageTitle: 'صفحه تفاصيل آله فنطاس مياه', fontas, columnNames });
    } catch (err) {
        next(err);
    }
};

///////////////////////////////////////////
exports.getKasor = async (req, res, next) => {
    try {
        const db = getDb();
        const kasor= await db.collection('kasor').find().toArray();

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

        res.render('kasor', { pageTitle: 'صفحه تفاصيل كاسور', kasor , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getMaknsa = async (req, res, next) => {
    try {
        const db = getDb();
        const maknsa= await db.collection('maknsa').find().toArray();

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

        res.render('maknsa', { pageTitle: 'صفحه تفاصيل مكنسه ممرات', maknsa , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getMakshta = async (req, res, next) => {
    try {
        const db = getDb();
        const makshta= await db.collection('makshta').find().toArray();

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

        res.render('makshta', { pageTitle: 'صفحه تفاصيل آله كشط أسفلت', makshta , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getBawzer = async (req, res, next) => {
    try {
        const db = getDb();
        const bawzer= await db.collection('bawzer').find().toArray();

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

        res.render('bawzer', { pageTitle: 'صفحه تفاصيل عربه تفويل وقود', bawzer , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getBotamen = async (req, res, next) => {
    try {
        const db = getDb();
        const botamen= await db.collection('botamen').find().toArray();

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

        res.render('botamen', { pageTitle: 'صفحه تفاصيل عربه رش بيتومين', botamen , columnNames });
    } catch (err) {
        next(err);
    }
};
///////////////////////////////////////////
exports.getMoaled = async (req, res, next) => {
    try {
        const db = getDb();
        const moaled= await db.collection('moaled').find().toArray();

        // أسماء الأعمدة المخصصة
        const columnNames = { 
            image1:"صوره العقد",
            rep1:"بيان الاعطال",
            rep2:"تقارير الصيانه",
            image2:"صوره الشاسيه",
            rep3:"مستند الصرف",
            image4:"مولدات الكساره",
            rep4:"مولدات الكيان",
            rep5:"مولدات الموقع + سوق السيارات",
            _id: 'رقم التعريف'
        };

        res.render('moaled', { pageTitle: 'صفحه تفاصيل ماكينة كهرباء', moaled , columnNames });
    } catch (err) {
        next(err);
    }
};


///////////////////////////////////////////
exports.getWensh = async (req, res, next) => {
    try {
        const db = getDb();
        const wensh= await db.collection('wensh').find().toArray();

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

        res.render('wensh', { pageTitle: 'صفحه تفاصيل ونش', wensh , columnNames });
    } catch (err) {
        next(err);
    }
};