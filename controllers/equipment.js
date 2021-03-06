const db = require('../models');
const Equipment = db['equipment'];
const faker = require('faker');
require('dotenv').config();

module.exports = {
    
    async generateEquipement(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {

                let kitchen = faker.random.number({min:0, max:1});;
                let heater = faker.random.number({min:0, max:1});;
                let wifi = faker.random.number({min:0, max:1});
                let iron = faker.random.number({min:0, max:1});
                let working_space = faker.random.number({min:0, max:1});
                let private_bathroom = faker.random.number({min:0, max:1});
                let shampoo = faker.random.number({min:0, max:1});
                let air_conditioner = faker.random.number({min:0, max:1});
                let hangers = faker.random.number({min:0, max:1});
                let hair_dryer = faker.random.number({min:0, max:1});
                let television = faker.random.number({min:0, max:1});

                const equipmentCollection = await Equipment.create({
                    equipment_id : '',
                    equipment_kitchen : kitchen ,
                    equipment_heater : heater,
                    equipment_wifi : wifi,
                    equipment_iron : iron,
                    equipment_working_space : working_space,
                    equipment_private_bathroom : private_bathroom,
                    equipment_shampoo : shampoo,
                    equipment_air_conditioner : air_conditioner,
                    equipment_hangers : hangers,
                    equipment_hair_dryer : hair_dryer ,
                    equipment_television : television,
                    deleted : '',
                })
            }
            res.status(200).send("Table Equipment generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllEquipment(req,res){
        try{

            const equipmentCollection = await Equipment.findAll({
                where: {deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(equipmentCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getEquipmentById(req,res){
        try{
            const equipmentCollection = await Equipment.findAll({
                where     : {equipment_id: req.params.equipmentId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(equipmentCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updateEquipment(req,res){
        try {
            var equipmentId = req.params.equipmentId;
            var equipmentUpdate = req.body;
            let equipmentUpdateValues= new Object();
            for(value in equipmentUpdate){
                if(equipmentUpdate[value] !== ''){
                    equipmentUpdateValues[value] = equipmentUpdate[value];
                }
            }

            console.log(equipmentUpdateValues);

            const equipmentCollection = await Equipment.update(
                equipmentUpdateValues,
                {
                where     : {equipment_id: equipmentId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async deleteEquipment(req,res){
        try{
            const delCollection = await Equipment.update({
                deleted   : 1
                },
                {
                where     : {equipment_id: req.params.equipmentId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.equipmentId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
