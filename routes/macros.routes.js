const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.macros.index);

module.exports = router