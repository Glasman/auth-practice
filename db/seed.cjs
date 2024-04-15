const client = require('./client.cjs')

const createTables = async() => {
    try {
        await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(30) UNIQUE,
            password VARCHAR(30) NOT NULL
        );
        `)
    } catch (error) {
        console.log(error)
    }
}

const dropTables = async() => {
    try {
        await client.query(`
        DROP TABLE IF EXISTS users;
        `)
    } catch (error) {
        console.log(error)
    }
}

const syncAndSeed = async() => {
    try {
        await client.connect();
        console.log('connected to db!')

        await dropTables();
        console.log('TABLES DROPPED')

        await createTables();
        console.log('TABLES CREATED')
    } catch (error) {
        console.log(error)
    }
}

syncAndSeed();