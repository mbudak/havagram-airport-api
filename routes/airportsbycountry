module.exports = function (app) {
    const sqlite3 = require('sqlite3').verbose();
    

    /// Airport By Country
    app.get('/airportsbycountry/:code', function (req, res) {
        const code = req.params.code.toUpperCase();

        let db = new sqlite3.Database('./db/apidatabase.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
        })
        
        db.all(`SELECT id, ident, iso_region, name  FROM airports WHERE iso_country = ?`, [code],  (error, rows) => {
            res.send(rows);
        })

        db.close((err) => {
            if (err) {
                console.log(err.message)
            }
        })
    })
}
