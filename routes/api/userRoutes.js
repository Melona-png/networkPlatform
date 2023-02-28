const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;