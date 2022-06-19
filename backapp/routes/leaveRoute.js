const express = require('express')
const router = express.Router()
const processor = require('../controllers/Leaver')

router.get('/', processor.leaver)
module.exports = router
