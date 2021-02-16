const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const homePage = require('./routes/admin');


const app = express();
const port = process.env.PORT||5000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(homePage);
app.use('/formb', homePage);

app.use(function(req,res){
    res.status(404);
    res.render('404')
})

app.listen(port, ()=>{console.log(`Listening on http://localhost:${port}`)});

