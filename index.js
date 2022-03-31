const port = process.env.port || 8000;
const express = require('express')
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

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions))
// Swagger

require('./endpoints')(app);




app.listen(port, () => console.log(`server running on PORT ${port}`))