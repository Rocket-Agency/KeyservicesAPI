ruleController = require('../controllers/rule');
const { authJwt } = require("../middlewares");
module.exports = (app) => {
    app.get('/rule/',authJwt.verifyToken,authJwt.isAdmin, ruleController.getAllRule);

    app.get('/rule/generate', ruleController.generateRule);

    app.get('/rule/getRuleById/:ruleId',authJwt.verifyToken,authJwt.isProprietaire, ruleController.getRuleById);

    app.put('/rule/update/:ruleId',authJwt.verifyToken,authJwt.isProprietaire,ruleController.updateRule);

    app.get('/rule/delete/:ruleId',authJwt.verifyToken,authJwt.isProprietaire,ruleController.deleteRule);

    app.post('/rule/add/',ruleController.createRule);
}