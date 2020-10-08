const router = require('express').Router()
const {Url} = require('../db/models')
const validUrl = require('valid-url')
const shortid = require('shortid')
const baseUrl = 'http://localhost:8080/'
module.exports = router

async function validateShortened(shortCode, unique) {
  let checkCode = await Url.findOne({where: {shortCode: shortCode}})
  if (!checkCode) {
    unique = true
    return unique
  } else {
    shortCode = shortid.generate()
  }
}

// this POST route creates the shortened id to be redirect by the link in index
router.post('/', async (req, res, next) => {
  try {
    const {original} = req.body
    if (!validUrl.isUri(baseUrl))
      return res.status(401).json('invalid base url')

    // CREATE URL
    let shortCode = shortid.generate()
    let unique = false
    // check if shortened url is unique
    while (!unique) {
      unique = validateShortened(shortCode, unique)
    }
    // check user url
    if (validUrl.isUri(original)) {
      try {
        let url = await Url.findOne({where: {original: original}})
        if (url) res.json(url)
        else {
          let shortUrl = baseUrl + 's/' + shortCode
          url = await Url.create({
            original: original,
            shortened: shortUrl,
            shortCode: shortCode
          })
          res.json(url)
        }
      } catch (err) {
        console.log(err)
        res.status(500).json('server error')
      }
    } else {
      res.status(400).json('invalid url')
    }
  } catch (err) {
    next(err)
  }
})
