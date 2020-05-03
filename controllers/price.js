const db = require('../models');
const Price = db['price'];
const faker = require('faker');
require('dotenv').config();

module.exports = {
    
    async generatePrice(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {

                let starting = faker.random.number({min:75, max:150});;
                let min = faker.random.number({min:0, max:75});;
                let max = faker.random.number({min:150, max:200});

                const priceCollection = await Price.create({
                    price_id : '',
                    price_starting : starting ,
                    price_min : min,
                    price_max : max,
                    deleted : ''
                })
            }
            res.status(200).send("Table Price generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllPrice(req,res){
        try{

            const priceCollection = await Price.findAll({
                where : {deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(priceCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getPriceById(req,res){
        try{

            const priceCollection = await Price.findAll({
                where     : {price_id: req.params.priceId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(priceCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async updatePrice(req,res){
        try {
            var priceId = req.params.priceId;
            var priceUpdate = req.body;
            let priceUpdateValues= new Object();
            for(value in priceUpdate){
                if(priceUpdate[value] !== ''){
                    priceUpdateValues[value] = priceUpdate[value];
                }
            }

            console.log(priceUpdateValues);

            const priceCollection = await Price.update(
                priceUpdateValues,
                {
                where     : {price_id: priceId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async deletePrice(req,res){
        try{
            const delCollection = await Price.update({
                deleted   : 1
                },
                {
                where     : {price_id: req.params.priceId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.priceId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
