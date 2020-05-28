const db = require('../models');
const Appointment = db['appointment'];
const faker = require('faker');
require('dotenv').config();

module.exports = {
    
    async generateAppointment(req, res) {
        try {
            for (let id = 1; id <= 10; id++) {

                let date = faker.random.number({min:0, max:1});;
                let time = faker.random.number({min:0, max:1});;
                let user_id = faker.random.number({min:0, max:1});
               
                const appointmentCollection = await Appointment.create({
                    appointment_id : '',
                    appointment_date : date ,
                    appointment_time : time,
                    appointment_user_id : user_id,
                })
            }
            res.status(200).send("Table Appointment generer");
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAllAppointment(req,res){
        try{

            const appointmentCollection = await Appointment.findAll({});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(appointmentCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getAppointmentById(req,res){
        try{

            const appointmentCollection = await Appointment.findAll({
                where     : {appointment_id: req.params.appointmentId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(appointmentCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getAppointmentByUserId(req,res){
        try{

            const appointmentCollection = await Appointment.findAll({
                where     : {appointment_user_id: req.params.userId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(appointmentCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },


    async updateAppointment(req,res){
        try {
            var appointmentId = req.params.appointmentId;
            var appointmentUpdate = req.body;
            let appointmentUpdateValues= new Object();
            for(value in appointmentUpdate){
                if(appointmentUpdate[value] !== ''){
                    appointmentUpdateValues[value] = appointmentUpdate[value];
                }
            }

            console.log(appointmentUpdateValues);

            const appointmentCollection = await Appointment.update(
                appointmentUpdateValues,
                {
                where     : {appointment_id: appointmentId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async createAppointment(req,res){
        try{
            var appointment_date = '';
            var appointment_time = req.body.appointmentTime;
            var appointment_user_id = req.body.userId;

            const appointmentCollection = await Appointment.create({
                appointment_id : '',
                appointment_date : appointment_date ,
                appointment_time : appointment_time,
                appointment_user_id : appointment_user_id,
            })
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
