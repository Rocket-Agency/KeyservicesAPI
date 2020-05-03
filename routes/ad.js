adController = require('../controllers/ad');
module.exports = (app) => {
    app.get('/ad/', adController.getAllAd);

    app.get('/ad/generate', adController.generateAd);

    app.get('/ad/getAdByUserId/:userId', adController.getAdByUserId);

    app.get('/ad/getAdById/:adId', adController.getAdById);

    app.get('/ad/delete/:adId', adController.deleteAd);

    app.put('/ad/update/:adId',adController.updateAd);

}
