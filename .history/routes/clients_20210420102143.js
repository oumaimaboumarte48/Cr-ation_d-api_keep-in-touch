const express = require('express');
const {postClient, getClients} = require('../controllers/clientCntrl');

const router = express.Router();



router.post('/client', postClient);
router.get('/client', getClients);

module.exports = router;