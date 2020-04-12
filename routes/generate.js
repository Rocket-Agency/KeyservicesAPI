generateController = require('../controllers/generateData.controller');

module.exports = (app) => {
    app.get('/api/generate/data', userController.generateUsers);
}