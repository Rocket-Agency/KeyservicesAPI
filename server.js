const express = require('express');
const bodyParser = require('body-parser');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
const PORT = 3030;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(pathToSwaggerUi))

require('./routes/routes')(app);

app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})