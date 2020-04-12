require('dotenv').config('config');
var toInteger = require('to-integer');

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
  timestamps: false,
  operatorsAliases: false,

  pool: {
    max: toInteger(POOLMAX),
    min: toInteger(POOLMIN),
    acquire: toInteger(POOLACQUIRE),
    idle: toInteger(POOLIDLE)
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);
db.group = require("./group")(sequelize, Sequelize);
db.contact = require("./contact")(sequelize, Sequelize);
db.address = require("./address")(sequelize, Sequelize);


db.group.belongsToMany(db.user, {
  through: "user_group_id", // user_groups
  foreignKey: "group_id",
  otherKey: "user_id"
});
db.user.belongsToMany(db.group, {
  through: "user_group_id",
  foreignKey: "user_id",
  otherKey: "group_id"
});

db.GROUPS = ["admin", "proprietaire", "locataire", "concierge", "user"];

module.exports = db;