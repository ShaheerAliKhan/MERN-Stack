const express = require('express');
const router = express.Router();

// router.use('/users', require('./users.js'))
// router.use('/posts', require('./posts.js'))
router.use('/quotes', require('./quotes.js'))

module.exports = router;