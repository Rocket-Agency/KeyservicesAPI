const db = require("../models");
const User = db.user;
const Groups = db.group;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
require('dotenv').config();

const secret = process.env.SECRET_KEY;

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    user_email: req.body.email,
    user_password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.groups) {
        Groups.findAll({
          where: {
            name: {
              [Op.or]: req.body.groups
            }
          }
        }).then(groups => {
          user.setRoles(groups).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
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
      email: req.body.email
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
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(groups => {
        for (let i = 0; i < groups.length; i++) {
          authorities.push("GROUPS_" + groups[i].name.toUpperCase());
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