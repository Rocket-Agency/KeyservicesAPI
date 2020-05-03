const db = require('../models');
const Info = db['info'];
const faker = require('faker');
require('dotenv').config();

module.exports = {
    
    async generateInfo(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {

                let infos = faker.lorem.sentence();
                let availability = faker.lorem.sentence();
                let area = faker.lorem.sentence()
                let around = faker.lorem.sentence();

                let stairs = faker.random.number({min:0, max:1});
                let noise = faker.random.number({min:0, max:1});
                let pets = faker.lorem.sentence()
                let no_parking = faker.random.number({min:0, max:1});
                let shared_space = faker.random.number({min:0, max:1});
                let equipment_restriction = faker.random.number({min:0, max:1});
                let monitoring_device = faker.lorem.sentence()
                let weapons = faker.random.number({min:0, max:1});
                let dangerous_animals = faker.random.number({min:0, max:1});

                const infoCollection = await Info.create({
                    info_id : '',
                    info_infos : infos ,
                    info_availability : availability,
                    info_area : area,
                    info_around : around,
                    info_stairs : stairs,
                    info_noise : noise,
                    info_pets : pets,
                    info_no_parking : no_parking,
                    info_shared_space : shared_space,
                    info_equipment_restriction : equipment_restriction ,
                    info_monitoring_device : monitoring_device,
                    info_weapons : weapons,
                    info_dangerous_animals : dangerous_animals,
                    deleted : ''
                })
            }
            res.status(200).send("Table Info generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllInfo(req,res){
        try{

            const infoCollection = await Info.findAll({
                where :{deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(infoCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getInfoById(req,res){
        try{

            const infoCollection = await Info.findAll({
                where     : {info_id: req.params.infoId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(infoCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async updateInfo(req,res){
        try {
            var infoId = req.params.infoId;
            var infoUpdate = req.body;
            let infoUpdateValues= new Object();
            for(value in infoUpdate){
                if(infoUpdate[value] !== ''){
                    infoUpdateValues[value] = infoUpdate[value];
                }
            }

            console.log(infoUpdateValues);

            const infoCollection = await Info.update(
                infoUpdateValues,
                {
                where     : {info_id: infoId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async deleteInfo(req,res){
        try{
            const delCollection = await Info.update({
                deleted   : 1
                },
                {
                where     : {info_id: req.params.infoId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.infoId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
