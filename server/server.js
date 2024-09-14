const express = require('express')

const app = express()

app.use(require("./routes/routes.js"))

app.listen(9000,()=>{
    console.log('server corriendo')
})