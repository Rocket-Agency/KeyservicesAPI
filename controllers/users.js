const db = require('../models');
const User = db['user'];
const faker = require('faker');
var bcrypt = require("bcryptjs");
require('dotenv').config();

module.exports = {

    async generateUsers(req, res) {
        try {
            const userCollection = await User.create({
                user_last_name : faker.name.firstName(),
                user_first_name : faker.name.lastName(),
                user_date_of_birth : new Date().toISOString().slice(0, 19).replace('T', ' '),
                user_sexe : 'Homme',
                user_photo : 'photo.pnj',
                user_email : faker.internet.email(),
                user_password : faker.internet.password(),
                user_adresse_txt : faker.address.streetAddress(),
            })
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
            })
            
            .then(user => {
                var authorities = [];
                user.getGroups().then(groups =>{
                    for (let i = 0; i < groups.length; i++) {
                        authorities.push(groups[i].group_name);
                      }
                    res.status(200).send({
                        user_id : user.user_id,
                        user_first_name: user.user_first_name,
                        user_last_name: user.user_last_name,
                        user_group : authorities
                    });
                })
            });
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async update(req,res) {

        try{
            const userId = req.params.userId;
            const userCollection = await User.update({
                user_first_name: req.body.user_first_name,
                user_last_name: req.body.user_last_name,
                user_date_of_birth: req.body.user_date_of_birth,
                user_sexe: req.body.user_sexe,
                user_photo: req.body.user_photo,
                user_email: req.body.user_email,
                user_password: bcrypt.hashSync(req.body.user_password, 8),
                user_adresse_txt: req.body.user_adresse_txt
              },{
                where: { user_id: userId }
        });
            if(userCollection){

                const updatedUser = await User.findOne({
                    where: { user_id: userId }
                });

                return res.status(200).json({ post: updatedUser });

            }
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);

        }
    },

    async delete (req,res){
        try {
            const userId = req.params.userId;
            const deleted = await User.destroy({where: { user_id: userId }});
        if (deleted) {
            return res.status(204).send("User deleted");
          }
        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    }
}