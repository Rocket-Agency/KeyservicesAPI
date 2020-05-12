equipmentController = require('../controllers/equipment');
const { authJwt } = require("../middlewares");
module.exports = (app) => {
    app.get('/equipment/',authJwt.verifyToken,authJwt.isAdmin, equipmentController.getAllEquipment);

    app.get('/equipment/generate', equipmentController.generateEquipement);

    app.get('/equipment/getEquipmentById/:equipmentId',authJwt.verifyToken,authJwt.isProprietaire, equipmentController.getEquipmentById);

    app.get('/equipment/delete/:equipmentId',authJwt.verifyToken,authJwt.isProprietaire, equipmentController.deleteEquipment);

    app.put('/equipment/update/:equipmentId',authJwt.verifyToken,authJwt.isProprietaire, equipmentController.updateEquipment);

}