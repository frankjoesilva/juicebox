const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName, getAllPosts } = require('../db');
const { get } = require('./posts');

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /users");
    next()
  //   res.send({ message: 'hello from /users!' });
  });
  
  tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const { tagName } = req.params;
    const getPostTag = await getPostsByTagName(tagName)
  
    try {
       getPostTag.filter(post => {
        return post.active || (req.user && post.author.id === req.user.id);
      });
      res.send({ posts: getPostTag })

    } catch ({ name, message }) {
      next({name, message})
    }
  });

  tagsRouter.get('/', async (req, res) => {
      const tags = await getAllTags();
  
      res.send({
        tags
      });
    });
  
  
  module.exports = tagsRouter;