const router = require('express').Router()
module.exports = router

// these routes sit on top of /api

router.use('/users', require('./users'))
router.use('/url', require('./url'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
