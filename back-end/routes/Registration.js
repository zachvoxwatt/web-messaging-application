const express = require('express')
const router = express.Router()
const processor = require('../controllers/Registration')

router.post('/', processor.register)

module.exports = router