housingController = require('../controllers/housing');
const { authJwt } = require("../middlewares");
module.exports = (app) => {
    app.get('/housing/generate', housingController.generateHousing);

    app.get('/housing/',authJwt.verifyToken,authJwt.isAdmin, housingController.getAllHousing);

    app.get('/housing/getHousingById/:housingId',authJwt.verifyToken,authJwt.isProprietaire, housingController.getHousingById);

    app.get('/housing/getHousingByAddressId/:addressId',authJwt.verifyToken,authJwt.isProprietaire,housingController.getHousingByAddressId);

    app.put('/housing/update/:housingId',authJwt.verifyToken,authJwt.isProprietaire, housingController.updateHousing);

    app.get('/housing/delete/:housingId',authJwt.verifyToken,authJwt.isProprietaire, housingController.deleteHousing);
}