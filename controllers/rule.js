const db = require('../models');
const Rule = db['rule'];
const faker = require('faker');
require('dotenv').config();

module.exports = {
    
    async generateRule(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {

                let age_2_12 = faker.random.number({min:0, max:1});;
                let age_2 = faker.random.number({min:0, max:1});;
                let pets = faker.random.number({min:0, max:1});
                let smoking = faker.random.number({min:0, max:1});
                let event = faker.random.number({min:0, max:1});
                let add = faker.lorem.sentence();

                const ruleCollection = await Rule.create({
                    rule_id : '',
                    rule_age_2_12 : age_2_12 ,
                    rule_age_2 : age_2,
                    rule_pets : pets,
                    rule_smoking : smoking,
                    rule_event : event,
                    rule_add : add,
                })
            }
            res.status(200).send("Table Rule generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllRule(req,res){
        try{

            const ruleCollection = await Rule.findAll({});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(ruleCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
