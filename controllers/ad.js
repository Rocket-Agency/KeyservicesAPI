const db = require('../models');
const Ad = db.ad;
addressController = require('../controllers/address');

const faker = require('faker');
require('dotenv').config();

module.exports = {
    
    async generateAd(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {

                let title = faker.lorem.sentence();
                let description = faker.lorem.sentences();
                let capacity = faker.random.number({min:1, max:9});
                let notice = 2; //préavis
                let arrival_time = faker.random.number({min:8, max:15})+':'+faker.random.number({min:0, max:60}) ;
                let departure_time = faker.random.number({min:8, max:15})+':'+faker.random.number({min:0, max:60}) ;
                let min_night = faker.random.number({min:1});
                let max_night = faker.random.number({max:10});
                let starting_date = faker.random.number({min:0, max:30})+'/'+faker.random.number({min:0, max:12})+'/'+'2020';
                let ending_date = faker.random.number({min:0, max:30})+'/'+faker.random.number({min:0, max:12})+'/'+'2020';

                let housing_id = id;
                let user_id = id;
                let housing_price = id;



                const AdCollection = await Ad.create({
                    ad_id : '',
                    ad_title : title ,
                    ad_description : description,
                    ad_capacity : capacity,
                    ad_notice : notice,
                    ad_arrival_time : arrival_time,
                    ad_departure_time : departure_time ,
                    ad_min_night : min_night,
                    ad_max_night : max_night,
                    ad_starting_date : starting_date,
                    ad_ending_date : ending_date,
                    deleted : '' ,
                    ad_housing_id : housing_id,
                    ad_user_id : user_id,
                    ad_housing_price_id : housing_price,
                })
            }
            res.status(200).send("Table Ad generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllAd(req,res){
        try{

            const AdCollection = await Ad.findAll({
                where: {deleted : null}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(AdCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getAdById(req,res) {
        try {

            const adCollection = await Ad.findAll({
                where     : {ad_id: req.params.adId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(adCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getLastAdByUserId(req,res) {
        try {

            const adCollection = await Ad.findOne({
                where     : {ad_user_id: req.params.userId},
                order     : [['ad_id', 'DESC']]
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send( {ad_id : adCollection['ad_id']} );
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getAdByUserId(req,res) {
        try {

            const adCollection = await Ad.findAll({
                where     : {ad_user_id: req.params.userId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(adCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async updateAd(req,res) {
        try {
            var adId = req.params.adId;
            var adUpdate = req.body;
            let adUpdateValues= new Object();
            for(value in adUpdate){
                if(adUpdate[value] !== ''){
                    adUpdateValues[value] = adUpdate[value];
                }
            }

            console.log(adUpdateValues);

            const adCollection = await Ad.update(
                adUpdateValues,
                {
                where     : {ad_id: adId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async deleteAd(req,res){
        try{
            const delCollection = await Ad.update({
                deleted   : 1
                },
                {
                where     : {ad_id: req.params.adId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.adId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
};
