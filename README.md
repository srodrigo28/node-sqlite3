# Projeto Sqlite
    * link.: https://bancodedadoscomjavascript.club.hotmart.com/lesson/V4VPVPYr72/criando-tabelas
# Instalando dependencias
    * npm init -y
    * npm i sqlite3
# primeira conexao
    const sqlite = require('sqlite3').verbose()

    const db = new sqlite.Database('database.sqlite3', (err) => {
        console.log(err, 'init' )
    })
# create table
    const sqlite = require('sqlite3').verbose()

    const db = new sqlite.Database('database.sqlite3', (err) => {
        console.log(err, 'init' )

        db.run(`
            CREATE TABLE categories(
                id INTEGER PRIMARY KEY NOT NULL,
                category TEXT
            );
        `, (err) => { console.log('table create sucess!')
        })
    })
# Out