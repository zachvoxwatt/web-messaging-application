const express = require('express')
const router = express.Router()
const processor = require('../controllers/Pinger')

router.get('/', processor.pinger)
module.exports = router
