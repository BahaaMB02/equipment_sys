const express = require('express');
const router = express.Router();
const homeController = require('../controllers/equipmentController');


router.get('/home/bldozer/cat', homeController.getBldozercat);
router.get('/home/bldozer/kom', homeController.getBldozerkom);

router.get('/home/gredar/cat', homeController.getGredarcat);
router.get('/home/gredar/kom', homeController.getGredarkom);


module.exports = router;