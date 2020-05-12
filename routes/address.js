addressController = require('../controllers/address');
const { authJwt } = require("../middlewares");
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
    app.get('/address/',authJwt.verifyToken,authJwt.isAdmin, addressController.getAllAddress);


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
    app.get('/address/getAddressById/:addressId',authJwt.verifyToken,authJwt.isProprietaire, addressController.getAddressById);

    app.get('/address/getAddressByUserId/:userId',authJwt.verifyToken,authJwt.isProprietaire, addressController.getAddressByUserId);

    app.post('/address/UseraddressAdd/',authJwt.verifyToken,authJwt.isProprietaire, addressController.createAddressUser);

    app.put('/address/update/:addressId',authJwt.verifyToken,authJwt.isProprietaire, addressController.updateAddress);

    app.get('/address/delete/:addressId', authJwt.verifyToken,authJwt.isProprietaire,addressController.deleteAddress);
    
};
