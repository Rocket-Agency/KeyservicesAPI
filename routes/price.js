priceController = require('../controllers/price');
module.exports = (app) => {
    app.get('/price/', priceController.getAllPrice);

    app.get('/price/generate', priceController.generatePrice);

    app.get('/price/getPriceById/:priceId', priceController.getPriceById);

    app.put('/price/update/:priceId',priceController.updatePrice);

    app.get('/price/delete/:priceId',priceController.deletePrice);
}