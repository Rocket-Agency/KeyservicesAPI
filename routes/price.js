priceController = require('../controllers/price');
const { authJwt } = require("../middlewares");
module.exports = (app) => {
    app.get('/price/',authJwt.verifyToken,authJwt.isAdmin, priceController.getAllPrice);

    app.get('/price/generate', priceController.generatePrice);

    app.get('/price/getPriceById/:priceId',authJwt.verifyToken,authJwt.isProprietaire, priceController.getPriceById);

    app.put('/price/update/:priceId',authJwt.verifyToken,authJwt.isProprietaire,priceController.updatePrice);

    app.get('/price/delete/:priceId',authJwt.verifyToken,authJwt.isProprietaire,priceController.deletePrice);
}