priceController = require('../controllers/price');
module.exports = (app) => {
    app.get('/api/price', priceController.getAllPrice);


    app.get('/price/generate', priceController.generatePrice);
}