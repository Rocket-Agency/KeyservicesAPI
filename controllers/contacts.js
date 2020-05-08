const db = require('../models');
const Contact = db['contact'];
const faker = require('faker');
require('dotenv').config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
           user: 'contact.keyservices2020@gmail.com',
           pass: 'Kerservices2020'
       }
   });

module.exports = {
    
    async generateContact(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {
                const contactCollection = await Contact.create({
                    contact_id : id,
                    contact_first_name : faker.name.firstName(),
                    contact_last_name : faker.name.lastName(),
                    contact_email : faker.internet.email(),
                    contact_object : faker.lorem.sentence(),
                    contact_message : faker.lorem.paragraph()
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
                contact_first_name : req.body.first_name,
                contact_last_name : req.body.last_name,
                contact_email : req.body.email,
                contact_object : req.body.object,
                contact_message : req.body.message,
            });
            const message = {
                from: 'contact.keyservices2020@gmail.com', // Sender address
                to: 'contact.keyservices2020@gmail.com', // List of recipients
                subject: req.body.object, // Subject line
                text: req.body.first_name + ' , ' + req.body.last_name + ' , ' + req.body.email + ' Objet : ' + req.body.object + ' Message : ' + req.body.message // Plain text body
            };
            transporter.sendMail(message, function(err, info) {
                if (err) {
                  console.log(err)
                } else {
                  console.log(info);
                }
            });
            res.status(200).send(contactCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    }
}