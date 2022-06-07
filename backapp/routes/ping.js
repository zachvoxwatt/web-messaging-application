const express = require('express')
const router = express.Router()
const processor = require('../controllers/Pinger')

router.get('/', processor.ping)

module.exports = router