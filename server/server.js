const express = require('express')
const cors = require('cors')
const mysql = require("mysql")
const myconn = require("express-myconnection")
require('dotenv').config();


const app = express()
app.use(cors())
app.use(express.json());
app.use(myconn(mysql,{
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB 
}
))

app.use(require("./routes/routes.js"))



app.listen(9000,()=>{
    console.log('server corriendo')
})