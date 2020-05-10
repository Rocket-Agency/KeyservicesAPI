const db = require('../models');
const Photo = db['photo'];
const fs = require('fs');
const mkdirp = require('mkdirp')


require('dotenv').config();

exports.upload = (req,res) => {
    var files = req.files;
    var ad_Id = req.body.ad_Id;
    var final_link = 'uploads/'+ad_Id+'/';
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

    res.status(200).send("images sauvegarder");
}