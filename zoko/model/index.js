const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Ayush@1234',
    database: 'login',
});

client.connect();


const getIdPassword = async (id) => {
    
    try {
        const query = `Select * from LoginPage where id = '${id}'`;
        const data = await client.query(query);
        if (data.rows.length) {
            return { databaseId: data.rows[0].id, databasePassword: data.rows[0].password }
        }
        return { databaseId: null, databasePassword: null }
    } catch (err) {
        console.log('Error in fetching Id and Password', err);
    }
}

module.exports = {
    getIdPassword,
}
