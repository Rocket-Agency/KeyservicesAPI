const db = require('../models');
const Services = db.services;
const faker = require('faker');
require('dotenv').config();

module.exports = {

    async getAllServices(req,res) {

        try {

            const servicesCollection = await Services.findAll({
                where: {deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(servicesCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getServicesById(req,res) {
        try {

            const servicesCollection = await Services.findAll({
                where     : {service_id: req.params.serviceId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(servicesCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getServicesByAdId(req,res) {
        try {

            const servicesCollection = await Services.findAll({
                where     : {service_ad_id: req.params.adId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(servicesCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async createServicesUser(req,res) {
        try {
                // console.log("valeur des services category : "+ req.body.serviceCheckinCheckout);
                var serviceCategory = req.body.serviceCategory;
                var serviceMiseEnLigne = req.body.serviceMiseEnLigne;
                var serviceRemiseCle = req.body.serviceRemiseCle;
                var serviceCheckinCheckout = req.body.serviceCheckinCheckout;
                var serviceFrigo = req.body.serviceFrigo;
                var serviceMenage = req.body.serviceMenage;

                var servicePrixTotal = 10;

                var adId = req.body.adId;

                
                const servicesCollection = await Services.create({
                    service_id : '',
                    service_category : serviceCategory,
                    service_mise_en_ligne : serviceMiseEnLigne,
                    service_remise_cle : serviceRemiseCle,
                    service_checkin_checkout : serviceCheckinCheckout,
                    service_frigo : serviceFrigo,
                    service_menage : serviceMenage,
                    service_prix_total : servicePrixTotal,
                    service_deleted : '0',
                    service_ad_id : adId,
                  
                })
            
            res.status(200).send(servicesCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async updateServices(req,res) {
        try {
            var servicesId = req.params.servicesId;
            var servicesUpdate = req.body;
            let servicesUpdateValues= new Object();
            for(value in servicesUpdate){
                if(servicesUpdate[value] !== ''){
                    servicesUpdateValues[value] = servicesUpdate[value];
                }
            }

            const adCollection = await Services.update(
                servicesUpdateValues,
                {
                where     : {services_id: servicesId}
            });
            
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async deleteServices(req,res) {
        try {
                
                const servicesCollection = await Services.update({
                    deleted   : 1
                },
                {
                where     : {services_id: req.params.servicesId}
                });
            
            res.status(200).send("l'annonce "+ req.params.servicesId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
};
