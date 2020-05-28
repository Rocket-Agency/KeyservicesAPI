const db = require('../models');
var toInteger = require('to-integer');
const File = db.file;
const Address = db.address;
const Housing = db.housing;
const { QueryTypes } = require('sequelize');
const HOST = process.env.HOST;
const DB = process.env.DB;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DIALECT = process.env.DIALECT;
const POOLMAX = process.env.POOLMAX;
const POOLMIN = process.env.POOLMIN;
const POOLACQUIRE = process.env.POOLACQUIRE;
const POOLIDLE = process.env.POOLIDLE;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  dialectOptions: {
    timezone: 'Europe/Paris',
  },
  timestamps: false,
  /*operatorsAliases: false,*/

  pool: {
    max: toInteger(POOLMAX),
    min: toInteger(POOLMIN),
    acquire: toInteger(POOLACQUIRE),
    idle: toInteger(POOLIDLE)
  }
});

const faker = require('faker');
require('dotenv').config();

module.exports = {
    
    async getAllFile(req,res){
        try{

            const FileCollection = await File.findAll({
                where: {deleted : 0}
            });

            // const fileCollection = await sequelize.query(
            //     "SELECT * FROM file where deleted != 1");
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(FileCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getFileById(req,res) {
        try {

            const fileCollection = await File.findAll({
                where     : {file_id: req.params.fileId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(fileCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getConciergeList(req,res) {
        try {

            const conciergeCollection = await sequelize.query(
                'SELECT users.user_id, users.user_last_name from users INNER JOIN user_group_id on user_group_id.user_id = users.user_id where user_group_id.group_id = ?',
                {
                    replacements:[4],
                    type: QueryTypes.SELECT
                }
            );

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(conciergeCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async getFileByUserId(req,res) {
        try {

            const fileCollection = await sequelize.query(
                'SELECT file.* , filedress.filedress_txt FROM file INNER JOIN housing ON file.file_housing_id = housing.housing_id INNER JOIN filedress on housing.housing_filedress_id = filedress.filedress_id WHERE file_user_id = ?',
                {
                    replacements:[req.params.userId],
                    type: QueryTypes.SELECT
                }
            );

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(fileCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async updateFile(req,res) {
        try {
            var fileId = req.params.fileId;
            console.log(fileId);
            var fileUpdate = req.body;
            let fileUpdateValues= new Object();
            for(value in fileUpdate){
                if(fileUpdate[value] !== ''){
                    fileUpdateValues[value] = fileUpdate[value];
                }
            }

            console.log(fileUpdateValues);

            const fileCollection = await File.update(
                fileUpdateValues,
                {
                where     : {file_id: fileId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }

    },

    async deleteFile(req,res){
        try{
            const delCollection = await File.update({
                deleted   : 1
                },
                {
                where     : {file_id: req.params.fileId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.fileId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async createFile(req,res){

        var fileBillId = 0;
        var fileConciergeId = 0;
        var fileTypeService = req.body.fileTypeService;
        var fileStatus = req.body.fileStatus;
        var fileUserId = req.body.userId;
        var fileAdId = req.body.adId;

        try{
            const fileCollection = await File.create({
                file_id : '',
                file_bill_id : fileBillId,
                file_concierge_id : fileConciergeId,
                file_type_service : fileTypeService,
                file_status : fileStatus,
                file_user_id : fileUserId,
                file_ad_id : fileAdId,
                deleted : 0,
            })

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("le dossier vient d'être crée !");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
    
};
