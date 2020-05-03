ruleController = require('../controllers/rule');
module.exports = (app) => {
    app.get('/rule/', ruleController.getAllRule);

    app.get('/rule/generate', ruleController.generateRule);

    app.get('/rule/getRuleById/:ruleId', ruleController.getRuleById);

    app.put('/rule/update/:ruleId',ruleController.updateRule);

    app.get('/rule/delete/:ruleId',ruleController.deleteRule);
}