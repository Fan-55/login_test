const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res, next) => {
  User.find({ email: req.body.email })
    .select('firstName email password')
    .lean()
    .then(user => {

      if (user.length < 1) {
        return res.status(401).render('login', { error: ' Email or Password is incorrect! Please try again.', email: req.body.email })
      }

      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed'
          })
        }
        if (result) {
          return res.status(200).render('welcome', { firstName: user[0].firstName })
        }

        res.status(401).render('login', { error: ' Email or Password is incorrect! Please try again.', email: req.body.email })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})

module.exports = router