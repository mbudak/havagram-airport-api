module.exports = function (app) {

    app.get('/api/hello', function (req, res){
        res.send('hello here...')
    });

}
/*
const path = require('path');

const express = require('express');

// Controllers
const regionController = require('../controllers/regions');

const router = express.Router();

router.get('/api/regions', regionController.getRegions);


module.exports = router;
*/