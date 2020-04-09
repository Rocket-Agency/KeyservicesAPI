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

            const infoCollection = await Info.findAll({});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(infoCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
