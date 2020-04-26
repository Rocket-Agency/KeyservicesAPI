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
    app.get('/api/address', addressController.getAllAddress);


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
    app.get('/api/address/:id', addressController.getAddressById);

    app.post('/api/addressAdd/', addressController.createAddress);

    app.get('/api/addressDel/:addressId', addressController.deleteAddress);
}