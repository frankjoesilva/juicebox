const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../db');

postsRouter.use((req, res, next) => {
    console.log("A request is being made to /users");
    next()
  
  //   res.send({ message: 'hello from /users!' });
  });
  
  postsRouter.get('/', async (req, res) => {
      const posts = await getAllPosts();
  
      res.send({
        posts
      });
    });
  
  
  module.exports = postsRouter;