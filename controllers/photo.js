const db = require('../models');
const Photo = db['photo'];
const User = db['user'];
const fs = require('fs');
const mkdirp = require('mkdirp')
const url = require('url');


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
            var files = req.files[0];
            var user_Id = req.params.userId;
            var final_link = 'uploads/UserPicture/'+user_Id+'/';
            const made = mkdirp.sync(final_link);

            const photoCollection = await User.findOne(
                {
                    where     : {user_id: req.params.userId}
                }
            );

            const new_file_name = files['originalname'];
            const old_file = photoCollection['user_photo'];

            const updatePhotoCollection = await User.update(
                {
                    user_photo   : new_file_name
                },
                {
                    where     : {user_id: user_Id}
                }
            );
            
            if(old_file != "test.png"){
                fs.unlink(final_link + old_file, function (err) {
                    if (err) throw err;
                
                    console.log('Ancienne photo supprimer !');
                }); 
            }

            fs.rename('./uploads/buffer/' + new_file_name, final_link + new_file_name, function(err) {
                if (err) throw err;

                console.log('Nouvelle photo enregistrer !');
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("Photo modifier");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async deleteUserPhoto(req,res){ //a modifier verifier si unne ou plusieur photo sont supprimer faire fonction differente pour les user photo et annonce photo
        try{
            const delCollection = await Photo.update({
                user_photo   : 'test.jpg'
                },
                {
                where     : {user_id: req.params.userId}
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send("Photo supprimer");
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
            res.status(200).send("phot de l'annonce "+ req.params.photoId +" à était suprimer");
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },

    async getPhotoByUserId(req,res){
        try{
            urld =req.protocol+'://'+req.get('host');
            var user_id = req.params.userId;

            const photoCollection = await User.findOne(
                {
                where     : {user_id: user_id}
            });
            
            file_name = photoCollection['user_photo'];

            if(file_name == 'test.png')
                photo_url = urld+'/userPicture/'+file_name;

            else
                photo_url = urld+'/userPicture/'+user_id+'/'+file_name;

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({photo_url : photo_url});
        }
        catch(e){
            console.log(e);

            res.status(400).send(e);
        }
    },
    

    async getPhotoByAdId(req,res){
        try{
            const photoCollection = await User.findOne({
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
