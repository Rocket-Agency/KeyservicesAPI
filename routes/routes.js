//index.js
const userController = require('../controllers/users');
// const postController = require('../controllers/posts');
module.exports = (app) => {

    app.get('/',(req,res) => {
        res.status(200).send("Welcome KeyServices API v1")
    })

    // app.get('/api/users',userController.getAllUsers);

    // app.post('/api/user/create',userController.create);

    // app.put('/api/user/:userId',userController.update);

    // app.get('/api/:userId/posts',postController.getAllPostsOfUser);

    // app.post('/api/post/create',postController.createPost);

    // app.put('/api/:postId',postController.update);

    app.get('/users', userController.generateUsers);
    // app.get('/users', userController.getAllUser);

}