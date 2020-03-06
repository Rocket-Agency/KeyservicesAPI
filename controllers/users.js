const db = require('../models');
const User = db['user'];
const faker = require('faker');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcryptjs');
require('dotenv').config();

module.exports = {

    async generateUsers(req, res) {
        try {
            for (let id = 1; id <= 100; id++) {
                const userCollection = await User.create({
                    user_id : id,
                    user_first_name : faker.name.firstName(),
                    user_last_name : faker.name.lastName(),
                    user_sexe : 'F',
                    user_email : faker.internet.email(),
                    user_password : faker.internet.password(),
                    user_adresse_txt : faker.address.streetAddress(),
                    user_date_of_birth : new Date().toISOString().slice(0, 19).replace('T', ' '),
                    created : new Date().toISOString().slice(0, 19).replace('T', ' '),
                    user_group_id : Math.floor(Math.random() * 2) + 1,
                })
                res.status(201).send(userCollection);
            }
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

    async login(req,res, next){
        try {
            const jwtsecretkey = process.env.SECRET_KEY;
            const expiresIn = process.env.EXPIRES_IN;
            const userCollection = await User.findOne({
                where: {
                    user_email: req.body.email,
                },
            });
            const token = jwt.sign({user_first_name: req.body.email}, jwtsecretkey);
            res.status(200).send({
                auth: true,
                user: userCollection,
                token: token,
                message: 'user found'
            })
        }
        catch (e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async create(req,res) {
        try {
            const userCollection = await User
            .create({
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password, 8)
            });

            res.status(201).send(userCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const userCollection = await User.find({
                id : req.params.userId
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