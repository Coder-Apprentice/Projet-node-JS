const express = require('express')
const { engine }= require('express-handlebars');
const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})


const port = 3000;
app.listen(port, () => {
    console.log("L'application a démarer sur le port: " + port)
})
