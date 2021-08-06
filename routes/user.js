const express = require("express");
const {
  signin,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const { auth, authRole, authUpdateUser } = require("../config/authentication");
const router = express.Router();

router.post("/login", signin);
router.post("/createUser/:role", auth, authRole, createUser);
router.get("/users", auth, getUsers);
router.patch("/:id", auth, authUpdateUser, updateUser);
router.delete("/deleteuser/:id", deleteUser); // need to implement delete functionalities
module.exports = router;
