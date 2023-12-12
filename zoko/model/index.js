const { query } = require('express');
const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Ayush@1234',
    database: 'login',
});

client.connect();
//  Create account Api
const createAccount = async (id, password) => {
    try {
      const query = `Insert into LoginPage (id, password) values ('${id}','${password}')`;
      const data = await client.query(query);
      // console.log(data)
      // console.log(Object.keys(data.rowCount));
      return data;
    } catch(err) {
      throw err;
    }
  }
  
  const isAccountPresent = async (id) => {
    try {
      const query = `Select * from LoginPage where id = '${id}'`;
      const result = await client.query(query);
      if (result.rows.length) return true;
      return false;
    } catch(err) {
      throw err;
    }
  }
    //  login Api
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
// Dasboard data api
const Sdata = async (req, res) => {
  try {
    const query = 'Select * From Series';
    const data = await client.query(query);
    // console.log('Rows retrieved:', data.rows);
    res.json(data.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getDashBoardDetails = async () => {
  try {
      const query = 'Select * From Series';
      const data = await client.query(query);
      // console.log(query);
      // console.log('Rows retrieved:', data.rows);
      return (data.rows);
      // if (data.rows.length) {
      //     return { databaseId: data.rows[0].id, databasePassword: data.rows[0].password }
      // }
      // return { databaseId: null, databasePassword: null }
  } catch (err) {
      console.log('Error in fetching data', err);
      throw err;
  }
}


module.exports = {
    createAccount,
    isAccountPresent,
    getIdPassword,
     getDashBoardDetails,
    Sdata,
}
