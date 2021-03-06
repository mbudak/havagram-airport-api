module.exports = function (app) {
    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('./db/apidatabase.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('connected to SQLite db');
    });

    app.get('/', function (req, res){
        res.render('home')
    });

    // Airports
    app.get('/airports/:id', function (req, res) {
        let db = new sqlite3.Database('./db/apidatabase.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('connected to SQL db')
        })
        
        db.get(`SELECT * FROM airports WHERE ident = ?`, req.params.id,  (error, rows) => {
            console.log('rec', rows)
            res.send(rows);
        })

        db.close((err) => {
            if (err) {
                console.log(err.message)
            }
            console.log('db connection closed')
        })
    })


    /*
    app.get('/region/:code', function (req, res) {
        
        let db = new sqlite3.Database('./db/apidatabase.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('connected to SQL db')
        })
        
        db.get(`SELECT id, name FROM regions WHERE code = ?`, req.params.code,  (error, rows) => {
            res.send(rows);
        })

        db.close((err) => {
            if (err) {
                console.log(err.message)
            }
            console.log('db connection closed')
        })
    })
    
    app.get('/search', function (req, res) {
        res.send("mello");
    })

    app.get('/tryme', function (req, res) {
        
        res.send("hobarak : " + req.query.who);
    })
    */
}