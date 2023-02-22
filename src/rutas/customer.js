//import
const CustomerController =  require('../controladores/CustomerController');

const express = require('express');
const router = express.Router();

router.get('/', CustomerController.list);

module.exports = router;