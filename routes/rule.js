ruleController = require('../controllers/rule');
module.exports = (app) => {
    app.get('/api/rule', ruleController.getAllRule);


    app.get('/rule/generate', ruleController.generateRule);
}