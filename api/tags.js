const express = require('express');
const tagsRouter = express.Router();
const { getAllTags } = require('../db');

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /users");
    next()
  
  //   res.send({ message: 'hello from /users!' });
  });
  
  tagsRouter.get('/', async (req, res) => {
      const tags = await getAllTags();
  
      res.send({
        tags
      });
    });
  
  
  module.exports = tagsRouter;