const { Router } = require('express');
const controller = require('../controller');
const model = require('../model')

const router = Router();

router.get('/login', controller.login);
router.post('/create-account',controller.createAccount)
   router.get('/dasboard',model.Sdata)
  router.get('/dasboards',controller.getDashBoardDetails)

module.exports = router;