const express = require('express')
const router = express.Router()
const processor = require('../controllers/Joiner')

router.post('/', processor.joiner)
module.exports = router
