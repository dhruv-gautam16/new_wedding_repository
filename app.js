const express = require('express');
const app = express();
const path = require('path');

app.use( express.static( "public" ) );


app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/fabric',(req,res)=>{
    res.render('fabric');
})

app.get('/flowers',(req,res)=>{
    res.render('flowers');
})

app.get('/light',(req,res)=>{
    res.render('light');
})

app.get('/sound',(req,res)=>{
    res.render('sound');
})
app.get('/registrationform',(req,res)=>{
    res.render('form');
})

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.listen(3000,()=>{
    console.log("Listening to the port 3000 ");
})