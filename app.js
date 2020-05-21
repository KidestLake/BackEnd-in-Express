// console.log(2+2);
//Browser JS
// const name='Dev-Ed';
// const sayName= require('./sayName');
// const getName= require('./sayName');
// getName.sayName();
// getName.sayAddress();

// // sayName();
// // console.log(sayName);

// console.log(__dirname);
// console.log(`Kidooo ${__filename}`);

// console.log("kijiji");

const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
// middlewares
// app.use('/post', ()=>{
//     console.log(" middleware");
 
// })
//Import Routes
const postsRoutes = require('./Routes/post');
//const userRoutes = require('./Routes/user');
app.use('/post',postsRoutes);
//app.use('/user',userRoutes);
//Routes
app.get('/', (req,res)=>{
    res.send("We are at home");
}),
// app.get('/post', (req,res)=>{
//     res.send("We are at Post")
// });

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, 
{useNewUrlParser:true},
()=> console.log('Connected to db')
);

//Listening to the server
app.listen(3000);