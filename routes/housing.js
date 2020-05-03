housingController = require('../controllers/housing');
module.exports = (app) => {
    app.get('/housing/generate', housingController.generateHousing);

    app.get('/housing/', housingController.getAllHousing);

    app.get('/housing/getHousingById/:housingId', housingController.getHousingById);

    app.get('/housing/getHousingByAddressId/:addressId', housingController.getHousingByAddressId);

    app.put('/housing/update/:housingId', housingController.updateHousing);

    app.get('/housing/delete/:housingId', housingController.deleteHousing);
}