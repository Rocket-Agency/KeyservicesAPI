const db = require('../models');
const Installation = db['installation'];
const faker = require('faker');
require('dotenv').config();

module.exports = {
    
    async generateInstallation(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {

                let parking = faker.random.number({min:0, max:1});;
                let gym = faker.random.number({min:0, max:1});;
                let pool = faker.random.number({min:0, max:1});
                let jaccuzi = faker.random.number({min:0, max:1});

                const installationCollection = await Installation.create({
                    installation_id : '',
                    installation_parking : parking ,
                    installation_gym : gym,
                    installation_pool : pool,
                    installation_jaccuzi : jaccuzi,
                })
            }
            res.status(200).send("Table Installation generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllInstallation(req,res){
        try{

            const installationCollection = await Installation.findAll({});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(installationCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
