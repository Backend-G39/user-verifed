const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const hashPassword = require('../middlewares/hashPassword.middlewares');
const loginMiddelwares = require('../middlewares/login.middlewares');
const sessionJWT = require('../middlewares/sessionJWT.middlewares');
const { verifyJWT } = require('../utils/verifyJwt');

const routerUser = express.Router();

routerUser.route('/')
  .get(verifyJWT, getAll)
  .post(hashPassword, create);

routerUser.route('/login')
  .post(loginMiddelwares, sessionJWT, login)

routerUser.route('/:id')
  .get(verifyJWT, getOne)
  .delete(verifyJWT, remove)
  .put(verifyJWT, update);

module.exports = routerUser;