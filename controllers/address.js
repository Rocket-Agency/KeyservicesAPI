const db = require('../models');
const Address = db.address;
const faker = require('faker');
require('dotenv').config();

module.exports = {

    async generateAddress(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {
                let road_number = faker.random.number();
                let road_type = 'rue';
                let road_name = faker.address.streetName();
                let zip_code = faker.address.zipCode();
                let city = faker.address.city();

                const addressCollection = await Address.create({
                    address_id : '',
                    address_road_number : road_number,
                    address_road_type : road_type,
                    address_road_name : road_name,
                    address_additional_info : '',
                    address_state : '',
                    address_city : city,
                    address_zip_code : zip_code,
                    address_txt : road_number+' '+road_type+' '
                                +road_name+' '+zip_code+' ,'+city,
                    deleted : ' ',
                    address_primaire :'1',
                    userUserId :id,
                })
            }
            res.status(200).send("Table Address generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllAddress(req,res) {

        try {

            const addressCollection = await Address.findAll({
                where: {deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(addressCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getAddressById(req,res) {
        try {

            const addressCollection = await Address.findAll({
                where     : {address_id: req.params.addressId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(addressCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getAddressByUserId(req,res) {
        try {

            const addressCollection = await Address.findAll({
                where     : {userUserId: req.params.userId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(addressCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async createAddressUser(req,res) {
        try {
                let road_number = req.body.roadnumber;
                let road_type = req.body.roadtype;
                let road_name = req.body.roadname;
                let info = req.body.info;
                let state = req.body.state;
                let city = req.body.city;
                let zip_code = req.body.zipcode;
                let userID = req.body.userid;

                const addressCollection = await Address.create({
                    address_id : '',
                    address_road_number : road_number,
                    address_road_type : road_type,
                    address_road_name : road_name,
                    address_additional_info : info,
                    address_state : state,
                    address_city : city,
                    address_zip_code : zip_code,
                    address_txt : road_number+' '+road_type+' '
                                +road_name+' '+zip_code+' ,'+city,
                    deleted : ' ',
                    userUserId : userID,
                })
            
            res.status(200).send(addressCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async updateAddress(req,res) {
        try {
            var addressId = req.params.addressId;
            var addressUpdate = req.body;
            let addressUpdateValues= new Object();
            for(value in addressUpdate){
                if(addressUpdate[value] !== ''){
                    addressUpdateValues[value] = addressUpdate[value];
                }
            }

            const adCollection = await Address.update(
                addressUpdateValues,
                {
                where     : {address_id: addressId}
            });
            
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async deleteAddress(req,res) {
        try {
                
                const addressCollection = await Address.update({
                    deleted   : 1
                },
                {
                where     : {address_id: req.params.addressId}
                });
            
            res.status(200).send("l'annonce "+ req.params.addressId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
};
