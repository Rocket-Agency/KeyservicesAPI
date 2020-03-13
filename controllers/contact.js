const db = require('../models');
const Contact = db['contact'];
const faker = require('faker');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcryptjs');
require('dotenv').config();

module.exports = {
    async generateContact(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {
                const contactCollection = await Contact.create({
                    contact_id : id,
                    contact_sexe : 'F',
                    contact_first_name : faker.name.firstName(),
                    contact_last_name : faker.name.lastName(),
                    contact_email : faker.internet.email(),
                    contact_object : faker.lorem.sentence(),
                    contact_message : faker.lorem.paragraph(),
                    created : new Date().toISOString().slice(0, 19).replace('T', ' '),
                })
                res.status(201).send(contactCollection);
            }
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllContacts(req,res) {

        try {

            const contactCollection = await Contact.findAll({});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(contactCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },
    async create(req,res) {
        try {
            const contactCollection = await Contact
            .create({
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password, 8)
            });

            res.status(201).send(contactCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    }
}