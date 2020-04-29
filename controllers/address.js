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
                    address_user_id :id,
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

            const addressCollection = await Address.findAll({});
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
                attributes : ['address_txt'],
                where     : {address_id: req.params.id}
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
                    address_user_id : userID,
                })
            
            res.status(200).send(addressCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async deleteAddress(req,res) {
        try {
                let addressId = req.params.addressId;

                const addressCollection = await Address.destroy({
                    where:{
                        address_id : addressId
                    }
                })
            
            res.status(200).send("suppresion effective");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
};
