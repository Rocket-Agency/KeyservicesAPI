fileController = require('../controllers/file');
const { authJwt } = require("../middlewares");
module.exports = (app) => {
    app.get('/file/',authJwt.verifyToken,authJwt.isAdmin,fileController.getAllFile);

    app.get('/file/getFileByUserId/:userId',authJwt.verifyToken,fileController.getFileByUserId);

    app.get('/file/getFileById/:fileId',authJwt.verifyToken,fileController.getFileById);

    app.get('/file/getConciergeList/',authJwt.verifyToken,fileController.getConciergeList);

    app.get('/file/delete/:fileId',authJwt.verifyToken,fileController.deleteFile);

    app.put('/file/update/:fileId',authJwt.verifyToken,fileController.updateFile);
    
    app.post('/file/create/',authJwt.verifyToken,fileController.createFile);

}
