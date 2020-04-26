installationController = require('../controllers/installation');
module.exports = (app) => {
    app.get('/api/installation', installationController.getAllInstallation);


    app.get('/installation/generate', installationController.generateInstallation);
}