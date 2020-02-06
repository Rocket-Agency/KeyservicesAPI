const User = require('../models/user');
const faker = require('faker');

module.exports = {

    async generateUsers(req, res) {
        try {
            console.log('test1');
            for (let id = 1; id <= 100; id++) {
                const userCollection = await User.create({
                    user_id : id,
                    user_first_name : faker.name.firstName(),
                    user_last_name : faker.name.lastName()
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

            const userCollection = await User.find({});

            res.status(201).send(userCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const userCollection = await User
            .create({
                email : req.body.email,
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