const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=8000;

//express specific stuff
//app.use(express.static('static',options));
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//PUG specific stuff
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//ENDPOINT

app.get('/',(req,res)=>{
    const params={ };
    res.status(200).render('home.pug',params);
})
// app.get('/home',(req,res)=>{
//     const params={ };
//     res.status(200).render('home.pug',params);
// })

app.get('/contact',(req,res)=>{
    const params={ };
    res.status(200).render('contact.pug',params);
})




//start the server
app.listen(port,()=>{
    console.log(`The application is running on the port ${port}`);
})