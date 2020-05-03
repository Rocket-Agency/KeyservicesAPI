equipmentController = require('../controllers/equipment');
module.exports = (app) => {
    app.get('/equipment/', equipmentController.getAllEquipment);

    app.get('/equipment/generate', equipmentController.generateEquipement);

    app.get('/equipment/getEquipmentById/:equipmentId', equipmentController.getEquipmentById);

    app.get('/equipment/delete/:equipmentId', equipmentController.deleteEquipment);

    app.put('/equipment/update/:equipmentId',equipmentController.updateEquipment);

}