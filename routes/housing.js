housingController = require('../controllers/housing');
module.exports = (app) => {
    app.get('/housing/generate', housingController.generateHousing);
    app.get('/api/housing', housingController.getAllHousing);
}