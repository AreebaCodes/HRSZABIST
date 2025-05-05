const { Pool } =require('pg');
require('dotenv').config();

const pool = new Pool({
connectionString:process.env.DATABASE_URL,
Ssl:{
    rejectUnauthorized:false
}
});
module.exports = pool;