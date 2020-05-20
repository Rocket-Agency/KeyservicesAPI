const db = require('../models');
const Newsletter = db['newsletter'];

module.exports = {

    async getAllNewsletter(req,res) {

        try {

            const newsletterCollection = await Newsletter.findAll({});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(newsletterCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },
    async create(req,res) {
        console.log(req.body);
        try {
            const newsletterCollection = await Newsletter
            .create({
                newsletter_email : req.body.email,
                newsletter_ville : req.body.ville,
            });
            res.status(200).send(newsletterCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    }
}