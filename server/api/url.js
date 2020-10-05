const router = require('express').Router()
const {Url} = require('../db/models')
module.exports = router

router.get('/:url', async (req, res, next) => {
  try {
    const url = await Url.findOne({where: {original: req.params.url}})
    res.json(url.shortened)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const url = await Url.create(req.body)
    res.json(url.shortened)
  } catch (err) {
    next(err)
  }
})
