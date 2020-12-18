const express = require('express');
const responses = require('../../network/responses');
const routes = require('../../network/routes');
const UserService = require('./services');

const router = express.Router()

//Services
const userService = new UserService();


router.get('/', async (req, res, next) => {
  try {
    res.status(200).send('hello')
  } catch (error) {
    next(error)
  }
})

// Register
router.post(
  '/sign-up',
  async (req, res, next) => {

    const { body: user } = req;
    try {
      const createdUserId = await userService.createUser({ user });
      responses.success(
        req,
        res,
        createdUserId,
        201
      );
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
