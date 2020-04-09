equipmentController = require('../controllers/equipment');
module.exports = (app) => {
    app.get('/api/equipment', equipmentController.getAllEquipment);


    app.get('/equipment/generate', equipmentController.generateEquipement);
}