servicesController = require('../controllers/services');
const { authJwt } = require("../middlewares");
module.exports = (app) => {

    
    /**
     * @swagger
     * /api/services:
     *  get:
     *    tags: 
     *      - Services
     *    description: Use to request all adress
     *    consumes:
     *      - application/json
     *    produces:
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     */
    // app.get('/services/',authJwt.verifyToken,authJwt.isAdmin, servicesController.getAllServices);


    /**
     * @swagger
     * /api/services/:id:
     *  get:
     *    tags: 
     *      - Services
     *    description: Use to request all adress
     *    consumes:
     *      - application/json
     *    produces:
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     */
    // app.get('/services/getServicesById/:servicesId',authJwt.verifyToken,authJwt.isProprietaire, servicesController.getServicesById);

    // app.get('/services/getServicesByUserId/:userId',authJwt.verifyToken,authJwt.isProprietaire, servicesController.getServicesByUserId);

    app.post('/services/UserservicesAdd/',authJwt.verifyToken,servicesController.createServicesUser);

    // app.put('/services/update/:servicesId',authJwt.verifyToken,authJwt.isProprietaire, servicesController.updateServices);

    // app.get('/services/delete/:servicesId', authJwt.verifyToken,authJwt.isProprietaire,servicesController.deleteServices);
    
};
