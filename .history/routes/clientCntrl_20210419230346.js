const express = require('express');
const route = express.Router();
const clientCntrl = ('../controllers/clientCntrl');

route.post('/sendMessage', clientCntrl.sendMessage);
