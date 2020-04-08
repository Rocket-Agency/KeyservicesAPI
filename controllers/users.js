const db = require('../models');
const User = db['user'];
const faker = require('faker');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcryptjs');
require('dotenv').config();

module.exports = {

    async generateUsers(req, res) {
        try {
            for (let id = 1; id <= 50; id++) {
                if(id % 2 ==0){
                    sexeFM = 'F';
                }
                else{
                    sexeFM = 'M';
                }
               
                const userCollection = await User.create({
                    user_id : '',
                    user_last_name : faker.name.firstName(),
                    user_first_name : faker.name.lastName(),
                    user_date_of_birth : new Date().toISOString().slice(0, 19).replace('T', ' '),
                    user_sexe : sexeFM,
                    user_photo : 'photo.pnj',
                    user_email : faker.internet.email(),
                    user_password : faker.internet.password(),
                    user_adresse_txt : faker.address.streetAddress(),
                    deleted : '',
                    // user_group_id : Math.floor(Math.random() * 2) + 1,
                })
            }
            res.status(200).send(userCollection);
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllUsers(req,res) {

        try {

            const userCollection = await User.findAll({});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(userCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async findUser(req, res){
        try {
            const userId = req.params.userId;
            const userCollection = await User.findOne({
              where: { user_id: userId }
            });
            res.status(200).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async update(req,res) {

        try{
            const userId = req.params.userId;
            const userCollection = await User.findOne({
                where: { user_id: userId }
        });
            if(userCollection){

                const updatedUser = await User.update({
                    id : req.body.email
                });

                res.status(201).send(updatedUser)

            }
            else{

                res.status(404).send("User Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 
}