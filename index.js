require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const codeHanlder = require('./routeHandlers/codeAddHandler');
const mongoose = require('mongoose');
const uri = process.env.URI;

// Use Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(uri)
.then(()=> console.log("MongoDB Connected Successfully"))
.catch(()=> console.log("Error To connection mongodb"));



app.use('/code', codeHanlder);

app.get('/', (req, res)=>{
    res.send('Hello');
    console.log('World');
})

app.listen(port, ()=>{
   console.log('Server is Running in Port: 5000');
});