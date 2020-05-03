const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const userController = require('../controllers/users');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    '/api/user/:userId',
    [authJwt.verifyToken],
    userController.findUser
  );

  app.get(
    "/api/users",
    [authJwt.verifyToken, authJwt.isAdmin],
    userController.getAllUsers
  );
  app.put(
    "/api/user/update/:userId",
    [authJwt.verifyToken],
    userController.update
  );
  app.delete(
    "/api/user/delete/:userId",
    [authJwt.verifyToken, authJwt.isAdmin],
    userController.delete
  );
  /*app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );*/
};