const express = require('express');
const routes = require('../../network/routes');

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    res.status(200).send('hello')
  } catch (error) {
    next(error)
  }
})

module.exports = router;
