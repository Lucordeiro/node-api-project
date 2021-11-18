var express = require('express');
var router = express.Router();
const UserController = require('../Controllers/UserController');
const AuthMiddleware = require('../Middlewares/Auth');

 const userController = new UserController();
 const authMiddleware = new AuthMiddleware(process.env.SECRET_API);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get', authMiddleware.verifyToken.bind(authMiddleware),userController.getUser.bind(userController));
router.post('/auth', userController.auth.bind(userController));
router.get('/logout', userController.logout.bind(userController));
router.post('/register', userController.register.bind(userController));

module.exports = router;
