const express = require ('express');
const cors = require ('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{res.json('welcome to HR api');
    }catch(err){
res.status(500).json({ERROR:err.message});
    }
});

app.get('/emp',async(req,res)=>{
    try{
const result = await pool.query('select * from Employees');
res.json(result.rows);
    }catch(err){
res.status(500).json({ERROR:err.message});
    }
});

app.get('/Totalemp',async(req,res)=>{
    try{
const result1 = await pool.query('select count(employee_id) from Employees');
res.json(result1.rows);
    }catch(err){
res.status(500).json({ERROR:err.message});
    }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`connect successfully...on PORT ${PORT}`);
});
