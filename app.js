const express = require('express');
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Welcome to Node-App')
})  

app.listen(process.env.port || 3000, (err,data)=>{
    console.log('server is runningn on port 3000')
})