contactController = require('../controllers/contacts');
module.exports = (app) => {

    /**
     * @swagger
     * definitions :
     *      Contact :
     *          type: "object"
     *          properties :
     *              contact_id :
     *                  type: "integer"
     *              contact_last_name:
     *                  type: "string"
     *              contact_first_name:
     *                  type: "string"
     *              contact_email:
     *                  type: "string"
     *              contact_object:
     *                  type: "string"
     *              contact_message:
     *                  type: "text"
     */

    app.get('/contacts/generate', contactController.generateContact);

    /**
     * @swagger
     * /api/contacts:
     *  get:
     *    tags: 
     *      - Contact
     *    description: Use to request all contacts
     *    consumes:
     *      - application/json
     *    produces:
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     */
    app.get('/api/contacts', contactController.getAllContacts);

    /**
     * @swagger
     * /api/contact/create:
     *  post:
     *    tags:
     *      - Contact
     *    description: Use to create a contact
     *  parameters :
     *      - name : contact
     *        in : query
     *        description : name of contact
     *        required : true
     *        schema :
     *          type : string
     *          format : string
     *  responses:
     *      '200':
     *        description: A successful response
     */
    app.post('/api/contact/create', contactController.create);

}