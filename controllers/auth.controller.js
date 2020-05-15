const db = require("../models");
const User = db.user;
const Group = db.group;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var nodemailer = require('nodemailer');
require('dotenv').config();
var toInteger = require('to-integer');

const secret = process.env.SECRET_KEY;
var generator = require('generate-password');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
         user: 'contact.keyservices2020@gmail.com',
         pass: 'Kerservices2020'
     }
 });

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    user_first_name: req.body.first_name,
    user_last_name: req.body.last_name,
    user_date_of_birth: req.body.birth,
    user_sexe: req.body.sexe,
    user_photo: req.body.photo,
    user_email: req.body.email,
    user_password: bcrypt.hashSync(req.body.password, 8),
    user_adresse_txt: req.body.adresse
  })
    .then(user => {
      if (req.body.groups) {
        Group.findAll({
          where: {
            group_name: {
              [Op.or]: req.body.groups
            }
          }
        }).then(groups => {
            user.setGroups(groups).then(() => {
            const message = {
                from: 'contact.keyservices2020@gmail.com', // Sender address
                to: req.body.email,         // List of recipients
                subject: 'Bienvenue sur Keyservices !', // Subject line
                text: 'Veuillez vous rendre dans Mon espace' // Plain text body
            };
            transporter.sendMail(message, function(err, info) {
                if (err) {
                  console.log(err)
                } else {
                  console.log(info);
                }
            });
            res.status(200).send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 5
        user.setGroups([5]).then(() => {
          const message = {
              from: 'contact.keyservices2020@gmail.com', // Sender address
              to: req.body.email,         // List of recipients
              subject: 'Bienvenue sur Keyservices !', // Subject line
              text: 'Veuillez vous rendre dans Mon espace' // Plain text body
          };
          transporter.sendMail(message, function(err, info) {
              if (err) {
                console.log(err)
              } else {
                console.log(info);
              }
          });
          res.status(200).send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      user_email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.user_password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.user_id }, secret, {
        expiresIn: toInteger(process.env.EXPIRES_IN)
      });

      var authorities = [];
      user.getGroups().then(groups => {
        for (let i = 0; i < groups.length; i++) {
          authorities.push("GROUP_" + groups[i].group_name.toUpperCase());
        }
        res.status(200).send({
          id: user.user_id,
          email: user.user_email,
          groups: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.passwordreset = (req,res) => {
  var password = generator.generate({
    length: 10,
    numbers: true
  })
  User.update({
    user_password : bcrypt.hashSync(password, 8)
  },
  {where: {user_email: req.body.email}
  })
  const message = {
    from: 'contact.keyservices2020@gmail.com', // Sender address
    to: req.body.email, // List of recipients
    subject: 'Changement de mot de passe Keyservices', // Subject line
    text: 'Voici votre nouveau mot de passe ' + password // Plain text body
  };
  transporter.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
  res.status(200).send({
    message: "Password reset !" + password  
  })
};

exports.UpdatePassword = (req,res) => {

  User.findOne({
    where: {
      user_id: req.params.userId
    }
  })
  .then(user => {
    bcrypt.compare(req.body.passwordcurrent, user.user_password, function(err, result) {
      User.update({
        user_password : bcrypt.hashSync(req.body.passwordnew, 8)
      },
      {where: {user_id: req.params.userId}
      })
      res.status(200).send({
        message: "Password update !" 
      })
    });
  })
};
