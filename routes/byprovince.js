module.exports = function (app) {
    const sqlite3 = require('sqlite3').verbose();
    

    
    app.get('/byprovince/:code', function (req, res) {
        const code = req.params.code.toUpperCase();

        let db = new sqlite3.Database('./db/apidatabase.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
        })
        
        db.all(`SELECT iso_region, COUNT(id) as Total FROM airports WHERE iso_country = ? GROUP BY iso_region `, [code],  (error, rows) => {
            res.send(rows);
        })

        db.close((err) => {
            if (err) {
                console.log(err.message)
            }
        })
    })
}
