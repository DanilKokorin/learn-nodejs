const Router = require('../framework/Router');
const controller = require('./user-controller')

const router = new Router();

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Danil'}
]

router.get('/users', controller.gerUsers)

router.post('/users', controller.createUser)

module.exports = router;