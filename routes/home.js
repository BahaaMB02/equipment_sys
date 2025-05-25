const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/home', homeController.getHome);
router.get('/home/lodar', homeController.getLodar);
router.get('/home/bldozer', homeController.getBldozer);
router.get('/home/bobcat', homeController.getBobcat);
router.get('/home/gararmaknsa', homeController.getGararmaknsa);
router.get('/home/gredar', homeController.getGredar);
router.get('/home/hafar', homeController.getHafar);
router.get('/home/daghet', homeController.getDaghet);
router.get('/home/fenshr', homeController.getFenshr);
router.get('/home/fontas', homeController.getFontas);
router.get('/home/alab', homeController.getAlab);
router.get('/home/kasor', homeController.getKasor);
router.get('/home/maknsa', homeController.getMaknsa);
router.get('/home/makshta', homeController.getMakshta);
router.get('/home/bawzer', homeController.getBawzer);
router.get('/home/botamen', homeController.getBotamen);
router.get('/home/moaled', homeController.getMoaled);
router.get('/home/asphlt', homeController.getAsphlt);
router.get('/home/torab', homeController.getTorab);
router.get('/home/wensh', homeController.getWensh);
router.get('/home/garar40m', homeController.getGarar40m);

module.exports = router;