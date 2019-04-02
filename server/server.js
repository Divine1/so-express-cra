const express = require("express");
const path = require("path");
const ejs = require('ejs');
const app = express();

app.use("/static",express.static(__dirname+"/../build/static"));
app.set('views', path.join(__dirname, '/../build'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.get("*",(req,res)=>{
    res.render('index.html');
})

app.listen(5000,()=>{
    console.log("app running on port 5000");
})