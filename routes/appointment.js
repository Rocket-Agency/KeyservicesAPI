appointmentController = require('../controllers/appointment');
const { authJwt } = require("../middlewares");
module.exports = (app) => {
    app.get('/appointment/',authJwt.verifyToken,authJwt.isAdmin, appointmentController.getAllAppointment);

    app.get('/appointment/generate', appointmentController.generateAppointment);

    app.get('/appointment/getAppointmentById/:appointmentId', appointmentController.getAppointmentById);

    app.get('/appointment/getAppointmentByUserId/:userId', appointmentController.getAppointmentByUserId);

    app.put('/appointment/update/:appointmentId', appointmentController.updateAppointment);
    
    app.post('/appointment/create/', appointmentController.createAppointment);

}