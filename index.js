const port = process.env.port || 8000;
const express   = require('express'),
      ejs       = require('ejs'),
      path      = require('path')

const axios = require('axios')
// app
const app = express()

// Swagger API Documentation
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json')
const swaggerAutogen = require('swagger-autogen')();


var swaggerOptions = {
    explorer: true
}

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static(path.join(__dirname,'public')));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions))
// Swagger

require('./endpoints')(app);


var server = app.listen(8000, function(){
    // var host = server.address().address;
    var host = "localhost";
    var port = server.address().port;
    console.log(`Server running on http://${host}:${port}`)
})

