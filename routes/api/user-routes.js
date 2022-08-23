const router = require('express').Router();
const UserController = require('../../controller/user-controller')

router.route('/').get(getAllUser).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;