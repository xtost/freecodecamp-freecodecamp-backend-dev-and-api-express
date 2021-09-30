require('dotenv').config();
var express = require('express');
var app = express();

  
//1
console.log("Hello World");

//2
//app.get('/',(req,res) => {
//    res.send('Hello Express');
//}


//3
app.use('/public', express.static(__dirname + '/public'));
//4
app.get('/',(req,res) => {
    res.sendFile( __dirname +'/views/index.html');
})

//5
app.get('/json',(req,res)=> {
    let outmessage = 'Hello json';
    
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        console.log('here');
        outmessage = outmessage.toUpperCase();
    } 
    res.json({ message: outmessage})
})




































 module.exports = app;
