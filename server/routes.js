const authController = require('./controllers/authController');
const postController = require('./controllers/postController');

module.exports = (app) => {

  app.get('/posts', postController.getAll)
  app.get('/post/:id', postController.getSinglPost)
  app.post('/createpost',postController.createPost)

  app.post('/register', authController.register);
  app.post('/login', authController.login)  
}