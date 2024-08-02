const pg = require('pg');

const { Pool } = pg;

const dotenv = require('dotenv');
dotenv.config();


const pool = new Pool({

  connectionString: process.env.POSTGRES_URL,

})

pool.connect((err)=>{
    if(err) console.log(err);
    console.log('se a conectado');
})

module.exports = pool;