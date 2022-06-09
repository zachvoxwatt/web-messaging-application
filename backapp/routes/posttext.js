const express = require('express')
const router = express.Router()
const processor = require('../controllers/PostText')

router.post('/', processor.sendMessage)

module.exports = router