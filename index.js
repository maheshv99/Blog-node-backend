const express = require("express");
const cors = require('cors')

const hollywood = require('./routes/hollywood');
const bollywood = require('./routes/bollywood');
const fitness = require('./routes/fitness');
const food = require('./routes/food');
const technology = require('./routes/technology');
const home = require('./routes/home');
const img = require('./routes/imgText');

const app = express();

app.use(cors());
app.use("/",hollywood);
app.use("/",bollywood);
app.use("/",food);
app.use("/",fitness);
app.use("/",technology);
app.use("/",home);
app.use("/",img);

app.listen(8000,function(){
    console.log( "Server is running in port 8000")
})