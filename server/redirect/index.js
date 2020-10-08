const router = require('express').Router()
const {Url} = require('../db/models')
module.exports = router

// these routes sit on top of /s
router.get('/:code', async (req, res, next) => {
  try {
    console.log('inhere')
    const url = await Url.findOne({where: {shortCode: req.params.code}})
    if (url) {
      return res.redirect(url.original)
    } else {
      return res.status(404).json('no url found')
    }
  } catch (err) {
    next(err)
    res.status(500).json('Server error')
  }
})
