installationController = require('../controllers/installation');
const { authJwt } = require("../middlewares");
module.exports = (app) => {
    app.get('/installation/',authJwt.verifyToken,authJwt.isAdmin, installationController.getAllInstallation);

    app.get('/installation/generate', installationController.generateInstallation);

    app.get('/installation/getInstallationById/:installationId',authJwt.verifyToken,authJwt.isProprietaire, installationController.getInstallationById);

    app.put('/installation/update/:installationId',authJwt.verifyToken,authJwt.isProprietaire, installationController.updateInstallation);

    app.get('/installation/delete/:installationId',authJwt.verifyToken,authJwt.isProprietaire, installationController.deleteInstallation);


}