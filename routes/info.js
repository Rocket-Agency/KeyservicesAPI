infoController = require('../controllers/info');
const { authJwt } = require("../middlewares");
module.exports = (app) => {

    app.get('/info/', [authJwt.verifyToken], infoController.getAllInfo);

    app.get('/info/generate', infoController.generateInfo);

    app.get('/info/getInfoById/:infoId', infoController.getInfoById);

    app.put('/info/update/:infoId',infoController.updateInfo);

    app.get('/info/delete/:infoId', infoController.deleteInfo);
}