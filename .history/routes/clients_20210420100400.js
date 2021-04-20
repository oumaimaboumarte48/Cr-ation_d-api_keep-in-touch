const express = require('express');
const {client, info} = require('../controllers/clientCntrl');

const router = express.Router();



router.post('/client', client);
router.get('/client', client);

module.exports = router;