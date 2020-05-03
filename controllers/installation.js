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
                    deleted : ''
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

            const installationCollection = await Installation.findAll({
                where : {deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(installationCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getInstallationById(req,res){
        try{

            const installationCollection = await Installation.findAll({
                where     : {installation_id: req.params.installationId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(installationCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async updateInstallation(req,res){
        try {
            var installationId = req.params.installationId;
            var installationUpdate = req.body;
            let installationUpdateValues= new Object();
            for(value in installationUpdate){
                if(installationUpdate[value] !== ''){
                    installationUpdateValues[value] = installationUpdate[value];
                }
            }

            console.log(installationUpdateValues);

            const installationCollection = await Installation.update(
                installationUpdateValues,
                {
                where     : {installation_id: installationId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async deleteInstallation(req,res){
        try{
            const delCollection = await Installation.update({
                deleted   : 1
                },
                {
                where     : {installation_id: req.params.installationId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.installationId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
