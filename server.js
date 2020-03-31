const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const corsOptions = {
    origin: "http://localhost:3000"
};

// https://swagger.io/specification/#infoObject
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
app.use(cors(corsOptions));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const db = require("./models");
/*db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then ( function () {
    db.sequelize.sync ({ force: true }).then ( function () {
        console.log("Drop and re-sync db.");
        initial();
    });
});
const Group = db.group;
function initial() {
    Group.create({
      group_id: 1,
      group_name: "user"
    });
   
    Group.create({
      group_id: 2,
      group_name: "moderator"
    });
   
    Group.create({
      group_id: 3,
      group_name: "admin"
    });
}
*/

require('./routes/user')(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})
