adController = require('../controllers/ad');
const { authJwt } = require("../middlewares");
module.exports = (app) => {
    app.get('/ad/',authJwt.verifyToken,authJwt.isAdmin,adController.getAllAd);

    app.get('/ad/generate', adController.generateAd);

    app.get('/ad/getAdByUserId/:userId',authJwt.verifyToken,authJwt.isProprietaire,adController.getAdByUserId);

    app.get('/ad/getAdById/:adId',authJwt.verifyToken,authJwt.isProprietaire,adController.getAdById);

    app.get('/ad/delete/:adId',authJwt.verifyToken,authJwt.isProprietaire ,adController.deleteAd);

    app.put('/ad/update/:adId',authJwt.verifyToken,authJwt.isProprietaire,adController.updateAd);

}
