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
                    deleted : ''
                })
            }
            res.status(200).send("Table Rule generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async createRule(req, res) {
        try {


                let age_2_12 = req.body.age2;
                let age_2 = req.body.age_2;
                let pets = req.body.pets;
                let smoking = req.body.smoking;
                let event = req.body.event;
                let add = req.body.addrule ;

                const ruleCollection = await Rule.create({
                    rule_id : '',
                    rule_age_2_12 : age_2_12 ,
                    rule_age_2 : age_2,
                    rule_pets : pets,
                    rule_smoking : smoking,
                    rule_event : event,
                    rule_add : add,
                    deleted : 0,
                })

            res.status(200).send("Table Rule generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllRule(req,res){
        try{

            const ruleCollection = await Rule.findAll({
                where : {deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(ruleCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getRuleById(req,res){
        try{

            const ruleCollection = await Rule.findAll({
                where     : {rule_id: req.params.ruleId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(ruleCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async updateRule(req,res){
        try {
            var ruleId = req.params.ruleId;
            var ruleUpdate = req.body;
            let ruleUpdateValues= new Object();
            for(value in ruleUpdate){
                if(ruleUpdate[value] !== ''){
                    ruleUpdateValues[value] = ruleUpdate[value];
                }
            }

            console.log(ruleUpdateValues);

            const ruleCollection = await Rule.update(
                ruleUpdateValues,
                {
                where     : {rule_id: ruleId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async deleteRule(req,res){
        try{
            const delCollection = await Rule.update({
                deleted   : 1
                },
                {
                where     : {rule_id: req.params.ruleId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.ruleId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
