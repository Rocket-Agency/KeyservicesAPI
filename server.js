const express = require('express');
const bodyParser = require('body-parser');
// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const PORT = 3030;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use(express.static(pathToSwaggerUi))
// const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

require('./routes/routes')(app);

app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})