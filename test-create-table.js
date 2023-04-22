const sqlite = require('sqlite3').verbose()

const initDB = databaseFile => new Promise((resolve, reject) => {
    const db = new sqlite.Database(databaseFile, (err) => {
        if(err){ 
            reject(err)
        }
        else{
            resolve(db)
        }
    })
})
const run = (db, query) => new Promise((resolve, reject) => {
    db.run(query, err => {
        if(err){
            reject(err)
        }else{
            resolve()
        }
    })
})
const createTable = async() => {
    const db = await initDB('banco2.sqlite3')
    await run(db, `
        CREATE TABLE categories (
            id INTEGER PRIMARY KEY NOT NULL,
            category TEXT
        ); `
    )
    console.log('Categoria table created!')
}
createTable().catch( err => {
    console.log(err)
})
