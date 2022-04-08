const port = process.env.port || 8080;
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

// Controllers
// const apiRoutes = require('./routes/api');
// const regionController = require('./controllers/regions');
// app.use('/api', apiRoutes.Router);

// Views

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static(path.join(__dirname,'public')));

require('./routes/webapp')(app);
require('./routes/api')(app);
require('./routes/airport')(app);
require('./routes/airportsbycountry')(app);
require('./routes/byprovince')(app);


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions))
// Swagger

var server = app.listen(port, function(){
    // var host = server.address().address;
    var host = "localhost";
    var port = server.address().port;
    console.log(`Server running on http://${host}:${port}`)
})

