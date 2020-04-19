const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db['user'];
require('dotenv').config();

const secret = process.env.SECRET_KEY;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getGroups().then(groups => {
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].group_name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

isLocataire = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getGroups().then(groups => {
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].group_name === "Locataire") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Locataire Role!"
      });
    });
  });
};

isProprietaire = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getGroups().then(groups => {
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].group_name === "Proprietaire") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Locataire Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isLocataire: isLocataire,
  isProprietaire: isProprietaire
};
module.exports = authJwt;