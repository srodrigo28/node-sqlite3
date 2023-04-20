const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database('database.sqlite3', (err) => {
    console.log(err, 'init' )
})