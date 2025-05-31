const express = require('express');
const router = express.Router();
const homeController = require('../controllers/equipmentController');


router.get('/home/bldozer/cat', homeController.getBldozercat);
router.get('/home/bldozer/kom', homeController.getBldozerkom);

router.get('/home/gredar/cat', homeController.getGredarcat);
router.get('/home/gredar/kom', homeController.getGredarkom);

router.get('/home/alab/iv', homeController.getAlabIV);
router.get('/home/alab/mp3', homeController.getAlabMP3);
router.get('/home/alab/mp4', homeController.getAlabMP4);

router.get('/home/fenshr/fenshr2', homeController.getFenshr2);
router.get('/home/fenshr/fenshr3', homeController.getFenshr3);

router.get('/home/asphlt/asphltd', homeController.getAsphltD);
router.get('/home/asphlt/asphlth', homeController.getAsphltH);
router.get('/home/asphlt/asphltv', homeController.getAsphltV);

router.get('/home/torab/torabd', homeController.getTorabD);
router.get('/home/torab/torabh', homeController.getTorabH);
router.get('/home/torab/torabb', homeController.getTorabB);

module.exports = router;