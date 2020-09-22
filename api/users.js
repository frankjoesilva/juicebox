const express = require('express');
const usersRouter = express.Router();
const { getAllUsers } = require('../db');


usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");
  next()

//   res.send({ message: 'hello from /users!' });
});

usersRouter.get('/', async (req, res) => {
    const users = await getAllUsers();

    res.send({
      users
    });
  });


module.exports = usersRouter;