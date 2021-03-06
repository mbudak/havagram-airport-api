
module.exports = function (app) {
    const sqlite3 = require('sqlite3').verbose();
    
    
    app.get('/api/airport', function (req, res){
        res.status(200).json({
            hello: "mello here bb"
        });
    });

    /// Airport By Id
    app.get('/airports/:icao', function (req, res) {
        const icao = req.params.icao.toUpperCase();

        let db = new sqlite3.Database('./db/apidatabase.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
        })
        
        db.get(`SELECT * FROM airports WHERE ident = ?`, [icao],  (error, rows) => {
            res.send(rows);
        })

        db.close((err) => {
            if (err) {
                console.log(err.message)
            }
        })
    })
}
