const express = require('express');
const {client, client} = require('../controllers/clientCntrl');

const router = express.Router();



router.post('/client', client);
router.get('/client', client);

module.exports = router;