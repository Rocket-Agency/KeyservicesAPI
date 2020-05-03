addressController = require('../controllers/address');
module.exports = (app) => {
    app.get('/address/generate', addressController.generateAddress);
    
    /**
     * @swagger
     * /api/address:
     *  get:
     *    tags: 
     *      - Address
     *    description: Use to request all adress
     *    consumes:
     *      - application/json
     *    produces:
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     */
    app.get('/address/', addressController.getAllAddress);


    /**
     * @swagger
     * /api/address/:id:
     *  get:
     *    tags: 
     *      - Address
     *    description: Use to request all adress
     *    consumes:
     *      - application/json
     *    produces:
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     */
    app.get('/address/getAddressById/:addressId', addressController.getAddressById);

    app.get('/address/getAddressByUserId/:userId', addressController.getAddressByUserId);

    app.post('/address/UseraddressAdd/', addressController.createAddressUser);

    app.put('/address/update/:addressId', addressController.updateAddress);

    app.get('/address/delete/:addressId', addressController.deleteAddress);
    
};
