createAdController = require('../controllers/createAd');
const { authJwt } = require("../middlewares");
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/buffer');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
var upload = multer({storage: storage});

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
      

// app.post('/api/adcreate/',authJwt.verifyToken,authJwt.isProprietaire,upload.array("file",9),createAdController.adCreate);
app.post('/api/adcreate/',upload.array("file",9),createAdController.adCreate);
}