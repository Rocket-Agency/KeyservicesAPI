infoController = require('../controllers/info');
module.exports = (app) => {
    app.get('/api/info', infoController.getAllInfo);


    app.get('/info/generate', infoController.generateInfo);
}