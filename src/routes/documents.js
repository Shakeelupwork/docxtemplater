const router = require('express').Router();
const {documentsController} = require('../controllers');
router.route('/create').post(documentsController.createDocument);



module.exports = router;