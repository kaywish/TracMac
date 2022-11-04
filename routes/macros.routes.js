const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.macros.index)

router.post("/", ctrls.macros.create)

router.delete('/:id', ctrls.macros.destroy)

module.exports = router