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
        res.send('Hello API World')
    });

    app.get('/region', function (req, res) {
        let db = new sqlite3.Database('./db/apidatabase.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('connected to SQL db')
        })
        
        db.get("SELECT id, name FROM regions WHERE code = 'AD-02'", (error, rows) => {
            console.log('rows', rows);
            res.send(rows);
        })

        db.close((err) => {
            if (err) {
                console.log(err.message)
            }
            console.log('db connection closed')
        })
    })

    app.get('/regions', function (req, res){
        let db = new sqlite3.Database('./db/apidatabase.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('connected to SQL db')
        })

        db.serialize(() => {
            db.each(`SELECT id, Name FROM regions`, (err, row) => {
                if (err) {
                    console.log(err.message)
                }
                console.log(row.id + `\t` + row.name)
            })
        })
        res.send('Hello Cruel World Here')
    })

    app.get('/search', function (req, res) {
        res.send("mello");
    })

    app.get('/tryme', function (req, res) {
        
        res.send("hobarak : " + req.query.who);
    })
}