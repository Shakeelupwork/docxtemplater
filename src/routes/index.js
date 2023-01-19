const docsRouters = require('./documents');
const router = require('express').Router();

router.use('/documents',docsRouters);


module.exports = router;
