
module.exports = function (app) {
    const sqlite3 = require('sqlite3').verbose();
    
    app.get('/api/airport', function (req, res){
        res.status(200).json({
            hello: "mello here bb"
        });
    });

}
