const express = require('express');
const {postClient, getClients} = require('../controllers/clientCntrl');

const router = express.Router();



router.post('/client', postClient);
router.get('/clients', getClients);

module.exports = router;