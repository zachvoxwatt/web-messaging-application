const express = require('express')
const router = express.Router()
const processor = require('../controllers/TextPoster')
const verifyJWT = require('../middlewares/verityToken')

router.route('/').post(verifyJWT, processor.sender)
module.exports = router
