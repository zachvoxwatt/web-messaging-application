const express = require('express')
const router = express.Router()
const processor = require('../controllers/Login')

router.post('/', processor.login)

module.exports = router