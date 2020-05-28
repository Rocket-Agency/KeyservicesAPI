const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
var expressWinston = require('express-winston');
var winston = require('winston'); // for transports.Console
const app = express();
require('dotenv').config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

// https://swagger.io/specification/#infoObjec
const swaggerOptions = {
    swaggerDefinition : {
      info: {
          title : 'Keyservices API by Rocket-Agency',
          description: 'Api for taking information of agency keyservices',
          contact : {
              name: "Rocket-Agency"
          },
          version: "1.0.0",
          servers:["http://"+HOST+":"+PORT]
      },
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//declaration de l'emplacement des user picture
app.use('/userPicture',express.static(__dirname + '/uploads/UserPicture/'));


// express-winston logger makes sense BEFORE the router
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}));

const db = require("./models");
db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then ( function () {
     db.sequelize.sync ({ force: true }).then ( function () {
         console.log("Drop and re-sync db.");
         initial();
     });
 });
const Group = db.group;
const User = db.user;
function initial() {
    Group.create({
      group_id: 1,
      group_name: "admin"
    });
   
    Group.create({
      group_id: 2,
      group_name: "proprietaire"
    });

    Group.create({
      group_id: 3,
      group_name: "locataire"
    });

    Group.create({
      group_id: 4,
      group_name: "concierge"
    });

    Group.create({
      group_id: 5,
      group_name: "user"
    });

    User.create({
      user_id: 1,
      user_last_name: "admin",
      user_first_name: "admin",
      user_date_of_birth : "2020-05-13 00:00:00",
      user_sexe: 'ADMIN',
      user_photo: 'admin.png',
      user_email: 'admin@admin.fr',
      user_password: '$2a$08$hhyhOJleUXH.vsNzStb0OuZkqJFg44.8GhNxcA5aBBsOCgYZeIrNy',
      user_adresse_txt: "123 rue soleil",
      deleted: 0,
    }).then(user => {
      user.setGroups(1);
    });

    User.create({
      user_id: 2,
      user_last_name: "proprietaire",
      user_first_name: "proprietaire",
      user_date_of_birth : "2020-05-13 00:00:00",
      user_sexe: 'proprietaire',
      user_photo: 'test.png',
      user_email: 'proprietaire@proprietaire.fr',
      user_password: '$2a$08$hhyhOJleUXH.vsNzStb0OuZkqJFg44.8GhNxcA5aBBsOCgYZeIrNy',
      user_adresse_txt: "123 rue soleil",
      deleted: 0,
    }).then(user => {
      user.setGroups(2);
    });

    User.create({
      user_id: 3,
      user_last_name: "locataire",
      user_first_name: "locataire",
      user_date_of_birth : "2020-05-13 00:00:00",
      user_sexe: 'locataire',
      user_photo: 'test.png',
      user_email: 'locataire@locataire.fr',
      user_password: '$2a$08$hhyhOJleUXH.vsNzStb0OuZkqJFg44.8GhNxcA5aBBsOCgYZeIrNy',
      user_adresse_txt: "123 rue soleil",
      deleted: 0,
    }).then(user => {
      user.setGroups(3);
    });

    User.create({
      user_id: 4,
      user_last_name: "concierge",
      user_first_name: "concierge",
      user_date_of_birth : "2020-05-13 00:00:00",
      user_sexe: 'concierge',
      user_photo: 'concierge.png',
      user_email: 'concierge@concierge.fr',
      user_password: '$2a$08$hhyhOJleUXH.vsNzStb0OuZkqJFg44.8GhNxcA5aBBsOCgYZeIrNy',
      user_adresse_txt: "123 rue soleil",
      deleted: 0,
    }).then(user => {
      user.setGroups(4);
    });
   

}



require('./routes/user')(app);
require('./routes/contact')(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/address')(app);
require('./routes/equipment')(app);
require('./routes/installation')(app);
require('./routes/info')(app);
require('./routes/rule')(app);
require('./routes/housing')(app);
require('./routes/price')(app);
require('./routes/ad')(app);
require('./routes/createAd')(app);
require('./routes/photo')(app);
require('./routes/newsletter')(app);
require('./routes/services')(app);
require('./routes/payment')(app);
require('./routes/appointment')(app);
// express-winston errorLogger makes sense AFTER the router.
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}));

const server = app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})

module.exports = server;
