'use strict';

var express = require('express');
var controller = require('./AllWordsDatabase.controller.js');
var router = express.Router();
router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:theWords_id', controller.destroy);
module.exports = router;
