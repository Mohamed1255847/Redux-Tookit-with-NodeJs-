const express = require('express');
const router = express.Router();
const usercontroler = require('../controllers/users');

router.get('/getfullinfo',usercontroler.userData);
router.get('/afterincremnt',usercontroler.editeusers);
router.get('/getinfothunk',usercontroler.testThunk);




module.exports = router;