const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
    
  /**
     * @swagger
     * /api/auth/signup:
     *  post:
     *    tags:
     *      - User
     *    description: Use to register a user
     *  parameters :
     *      - first_name : firstname
     *        in : body
     *        description : firstname of user
     *        required : true
     *        schema :
     *          type : string
     *          format : string
     *      - last_name : lastname
     *        in : query
     *        description : lastname of user
     *        required : true
     *        schema :
     *          type : string
     *          format : string
     *      - birth : date of dirth
     *        in : query
     *        description : date of birth to user
     *        required : true
     *        schema :
     *          type : string
     *          format : string
     *  responses:
     *      '200':
     *        description: A successful response
     */
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkGroupsExisted
    ],
    controller.signup
  );

  /**
     * @swagger
     * /api/auth/signin:
     *  post:
     *    tags:
     *      - User
     *    description: Use to register a user
     *  parameters:
     *    - in: body
     *      name: user
     *      description: To create a user
     *      schema:
     *        type: object
     *        required:
     *          - email
     *          - password
     *        properties:
     *          email:
     *            type: string
     *          password:
     *            type: string
     *  responses:
     *      '200':
     *        description: A successful response
     */
  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/resetpassword", controller.passwordreset);

  app.put("/api/user/update/password/:userId", controller.UpdatePassword);
};
