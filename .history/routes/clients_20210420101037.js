const express = require('express');
const {postclient, getclients} = require('../controllers/clientCntrl');

const router = express.Router();



router.post('/client', postclient);
router.get('/clients', getclients);

module.exports = router;