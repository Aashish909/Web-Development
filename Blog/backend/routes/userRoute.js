

const express = require("express");
const { createUser, getUsers, getUser, updateUser, deleteUser, login } = require("../controllers/userController");
const router = express.Router();

router.post('/signup', createUser )

router.post('/signin', login)

router.get('/users', getUsers )


router.get('/users/:id', getUser )

router.patch('/users/:id', updateUser )

router.delete('/users/:id', deleteUser )

module.exports = router;
