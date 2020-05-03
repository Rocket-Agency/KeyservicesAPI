installationController = require('../controllers/installation');
module.exports = (app) => {
    app.get('/installation/', installationController.getAllInstallation);

    app.get('/installation/generate', installationController.generateInstallation);

    app.get('/installation/getInstallationById/:installationId', installationController.getInstallationById);

    app.put('/installation/update/:installationId', installationController.updateInstallation);

    app.get('/installation/delete/:installationId', installationController.deleteInstallation);


}