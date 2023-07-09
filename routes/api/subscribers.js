const express = require('express');
const router = express.Router();
const subscribersController = require('../../controllers/subscribersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
  .get(subscribersController.getAllSubscribers)
  // .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), usersController.createNewUser)
  // .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), subscribersController.updateSubscriber)
  // .delete(verifyRoles(ROLES_LIST.Admin), subscribersController.deleteSubscriber);
  .post(subscribersController.createNewSubscriber)
  .put(subscribersController.updateSubscriber)
  
  router.route('/:id')
  .get(subscribersController.getSubscriber) 
  .put(subscribersController.updateSubscriber) 
  .delete(subscribersController.deleteSubscriber)

module.exports = router;