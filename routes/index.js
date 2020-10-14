const express = require('express')
const router = express.Router()
const login = require('./modules/login')
const home = require('./modules/home')

router.use('/', home)
router.use('/login', login)

module.exports = router