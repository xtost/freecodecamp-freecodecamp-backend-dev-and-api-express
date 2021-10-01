require('dotenv').config();
require ('body-parser');

var express = require('express');
var app = express();

  
//1
console.log("Hello World");
//10
app.use(bodyparser.urlencoded({extended: false}));

//2
//app.get('/',(req,res) => {
//    res.send('Hello Express');
//}


//3
app.use('/public', express.static(__dirname + '/public'));

//6
let logger = function middleware(req, res, next)  {
    console.log(req.method + ' ' +req.path+' - '+req.ip);
    next();
}
app.use(logger);



//4
app.get('/',(req,res,next) => {
    res.sendFile( __dirname +'/views/index.html');
})


//5
app.get('/json',(req,res,next)=> {
    let outmessage = 'Hello json';
    
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        outmessage = outmessage.toUpperCase();
    } 
    res.json({ message: outmessage})
})


//7
app.get('/now', (req,res,next) =>  {
    req.time = new Date().toString();
 //   req.kk = 'kk';
    next();
}, (req, res)  => {
    res.json({time: req.time});
  //  res.json({time: req.time, kk:req.kk});
})

//8
app.get('/:word/echo',(req,res) => {
    res.json({echo: req.params.word})
})


//9
app.route('/name')
    .get((req,res,next) => {
     //   console.log('here');
        let first = req.query.first;
        let last = req.query.last;

        res.json({name: first+' '+last});
        //res.json({name: firstname+' '+lastname});
    })



































 module.exports = app;
