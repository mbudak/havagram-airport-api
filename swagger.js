const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Havagram Airports API',
    description: 'Airports API',
    license: {
        name : 'MIT',
        url : 'https://opensource.org/licenses/MIT'
      }
  },
  host: 'localhost:8000',
  basePath: '/',
  schemes: ['http']
};

const outputFile = './swagger-output.json';

// API Documentation Files
const apiFiles = ['./routes/api.js'];
const airportFiles = ['./routes/airport.js'];
const airportsByCountry = ['./routes/airportsbycountry'];

// const endpointsFiles = ['./endpoints.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, [apiFiles, airportFiles, airportsByCountry], doc);