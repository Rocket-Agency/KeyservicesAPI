userController = require('../controllers/users');
module.exports = (app) => {

    /**
     * @swagger
     * definitions :
     *      User :
     *          type: "object"
     *          properties :
     *              user_id :
     *                  type: "integer"
     *              user_last_name:
     *                  type: "string"
     *              user_first_name:
     *                  type: "string"
     *              user_date_of_birdth:
     *                  type: "string"
     *                  format: "date"
     *              user_sexe:
     *                  type: "string"
     *              user_photo:
     *                  type: "string"
     *              user_email:
     *                  type: "string"
     *              user_password:
     *                  type: "string"
     *                  format: "password"
     *              user_adresse_txt:
     *                  type: "string"
     *              created:
     *                  type: "string"
     *                  format: "date"
     *              updated:
     *                  type: "string"
     *                  format: "date"
     *              deleted:
     *                  type: "integer"
     *              user_group_id:
     *                  type: "integer"
     */


    app.get('/',(req,res) => {
        res.status(200).send("Welcome KeyServices API v1")
    })

    // app.put('/api/user/:userId',userController.update);

    // app.get('/api/:userId/posts',postController.getAllPostsOfUser);

    // app.post('/api/post/create',postController.createPost);

    // app.put('/api/:postId',postController.update);

    app.get('/users/generate', userController.generateUsers);

    /**
     * @swagger
     * /api/users:
     *  get:
     *    tags: 
     *      - User
     *    description: Use to request all users
     *    responses:
     *      '201':
     *        description: A successful response
     */
    app.get('/api/users', userController.getAllUsers);

    /**
     * @swagger
     * /api/user/create:
     *  post:
     *    tags:
     *      - User
     *    description: Use to create a user
     *  parameters :
     *      - name : user
     *        in : query
     *        description : name of user
     *        required : true
     *        schema :
     *          type : string
     *          format : string
     *  responses:
     *      '201':
     *        description: A successful response
     */
    app.post('/api/user/create',userController.create);

}