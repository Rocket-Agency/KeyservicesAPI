const db = require('../models');
const Photo = db['photo'];
const User = db['user'];
const fs = require('fs');
const mkdirp = require('mkdirp')


require('dotenv').config();

// exports.upload = (req,res) => {
//     var files = req.files;
//     var ad_Id = req.body.ad_Id;
//     var final_link = 'uploads/'+ad_Id+'/';
//     const made = mkdirp.sync(final_link);
   
//     files.forEach(element => 
        
//         Photo.create({
//                     photo_id : '',
//                     photo_name : element.originalname,
//                     photo_filename : element.filename,
//                     photo_description : 'pas de description',
//                     photo_link : final_link+element.originalname ,
//                     photo_size : element.size,
//                     photo_ad_id : ad_Id,
//                     deleted : 0
//                 }).then(photo => {
//                     fs.rename('./uploads/buffer/' + photo.photo_name, final_link + photo.photo_name, function(err) {
//                         if (err)
//                             throw err;
//                     });
//                 })
        
//     );

//     res.status(200).send("images sauvegarder");
// }

module.exports = {

    async addPhotos(req,res){
        try{
            var files = req.files;
            var ad_Id = req.body.adId;
            var final_link = 'uploads/'+adId+'/';
            const made = mkdirp.sync(final_link);
            files.forEach(element => 
                Photo.create({
                        photo_id : '',
                        photo_name : element.originalname,
                        photo_filename : element.filename,
                        photo_description : 'pas de description',
                        photo_link : final_link+element.originalname ,
                        photo_size : element.size,
                        photo_ad_id : ad_Id,
                        deleted : 0
                    }).then(photo => {
                            fs.rename('./uploads/buffer/' + photo.photo_name, final_link + photo.photo_name, function(err) {
                            if (err)
                                throw err;
                            });
                        })
                        
                );
            }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getAllPhoto(req,res){
        try{

            const photoCollection = await Photo.findAll({
                where :{deleted : 0}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(photoCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getPhotoById(req,res){
        try{

            const photoCollection = await Photo.findAll({
                where     : {photo_id: req.params.photoId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(photoCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async updateUserPhoto(req,res){//a modifier
        try {
            var photoId = req.params.photoId;
            var photoUpdate = req.body;
            let photoUpdateValues= new Object();
            for(value in photoUpdate){
                if(photoUpdate[value] !== ''){
                    photoUpdateValues[value] = photoUpdate[value];
                }
            }

            console.log(photoUpdateValues);

            const photoCollection = await Photo.update(
                photoUpdateValues,
                {
                where     : {photo_id: photoId}
            });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('mise a jours réusis');
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async deletePhoto(req,res){ //a modifier verifier si unne ou plusieur photo sont supprimer faire fonction differente pour les user photo et annonce photo
        try{
            const delCollection = await Photo.update({
                deleted   : 1
                },
                {
                where     : {photo_id: req.params.photoId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("l'annonce "+ req.params.photoId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getPhotoByUserId(req,res){
        try{
            const photoCollection = await User.findFirst({
                attributes: ['user_photo']
                },
                {
                where     : {user_id: req.params.user_id}
            });

            

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(photoCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getPhotoByAdId(req,res){
        try{
            const photoCollection = await User.findFirst({
                attributes: ['user_photo']
                },
                {
                where     : {user_id: req.params.user_id}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(photoCollection);
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    }
}
