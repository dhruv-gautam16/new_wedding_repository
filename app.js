const express = require('express');
const Razorpay = require('razorpay');
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

// Razropay Integration
var instance = new Razorpay({
    key_id: 'YOUR_KEY_ID',
    key_secret: 'YOUR_KEY_SECRET',
  });

app.post('/create/orderId',(req,res)=>{
    console.log("Create orderId request",req.body);
    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "rcp1"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.send({orderId:order.id});
      });
})
app.post("/api/payment/verify",(req,res)=>{

    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', '<YOUR_API_SECRET>')
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.response.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.response.razorpay_signature)
      response={"signatureIsValid":"true"}
         res.send(response);
     });
   
   

app.listen(3000,()=>{
    console.log("Listening to the port 3000 ");
})