const express = require('express');
const {client, clients} = require('../controllers/clientCntrl');

const router = express.Router();



router.post('/client', client);
router.get('/clients', clients);

module.exports = router;