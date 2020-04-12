const db = require("../models");
const User = db.user;
const Group = db.group;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
require('dotenv').config();
var toInteger = require('to-integer');

const secret = process.env.SECRET_KEY;

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
            name: {
              [Op.or]: req.body.groups
            }
          }
        }).then(groups => {
          user.setGroups(groups).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 5
        user.setGroups([5]).then(() => {
          res.send({ message: "User was registered successfully!" });
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