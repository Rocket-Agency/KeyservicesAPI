adController = require('../controllers/ad');
module.exports = (app) => {
    app.get('/api/ad', adController.getAllAd);


    app.get('/ad/generate', adController.generateAd);

    app.get('/ad/user/:id', adController.getAdByUserId);
}