photoController = require('../controllers/photo');

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

module.exports = function(app){

    app.post('/photo/savePhotos/',upload.array("file",9),photoController.upload);
    
};
