const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/food', ctrls.macros.index)

router.post("/food", ctrls.macros.create)

router.delete('/:id', ctrls.macros.destroy)

router.put('/:id', ctrls.macros.update)

module.exports = router