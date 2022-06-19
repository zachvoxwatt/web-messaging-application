const express = require('express')
const router = express.Router()
const processor = require('../controllers/Refresher')

router.get('/', processor.refresher)
module.exports = router
