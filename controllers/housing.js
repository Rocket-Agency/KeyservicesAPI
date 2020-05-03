const db = require('../models');
const Housing = db['housing'];
const faker = require('faker');
require('dotenv').config();

module.exports = {

    async generateHousing(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {
                
                if(id % 2 ==0){
                   
                    type_property = 'Maison';
                    type = 'Logement entier';

                }
                else{
                    type_property = 'appartement';
                    type = 'Chambre privée';
                }

                let nb_room = faker.random.number({min:1, max:10});
                let nb_bathroom = faker.random.number({min:1, max:6});
                
                let adress_id = id;
                let equipment_id = id;
                let installation_id = id;
                let info_id = id;
                let rule_id = id;
                

                const housingCollection = await Housing.create({
                    housing_id :'',
                    housing_type_property : type_property,
                    housing_type : type,
                    housing_nb_room : nb_room,
                    housing_nb_bathroom : nb_bathroom,
                    housing_address_id : adress_id,
                    housing_equipment_id : equipment_id,
                    housing_installation_id : installation_id,
                    housing_info_id : info_id,
                    housing_rule_id : rule_id,
                    
                                deleted : '',
                    housing_observation : '',
                })
            }
            res.status(200).send("Table Housing generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
    async getAllHousing(req,res) {

        try {

            const housingCollection = await Housing.findAll({
                where: {deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(housingCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getHousingById(req,res){
        try{
            const housingCollection = await Housing.findAll({
                where     : {housing_id: req.params.housingId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(housingCollection);
        }
        catch{
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getHousingByAddressId(req,res){
        try{
            const housingCollection = await Housing.findAll({
                where     : {housing_address_id: req.params.addressId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(housingCollection);
        }
        catch{
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updateHousing(req,res) {
        try {
            var housingId = req.params.housingId;
            var housingUpdate = req.body;
            let housingUpdateValues= new Object();
            for(value in housingUpdate){
                if(housingUpdate[value] !== ''){
                    housingUpdateValues[value] = housingUpdate[value];
                }
            }

            const housingCollection = await Housing.update(
                housingUpdateValues,
                {
                where     : {housing_id: housingId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async deleteHousing(req,res){
        try{
            const delCollection = await Housing.update({
                deleted   : 1
                },
                {
                where     : {housing_id: req.params.housingId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.housingId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}