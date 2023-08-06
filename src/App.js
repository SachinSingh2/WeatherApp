const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const hbs = require('hbs');


// setting up hbs partials
hbs.registerPartials('./templates/partials')
app.set('views' , './templates/views')



// Setting up what view engine we are using.
app.set('view engine', 'hbs');

// Setting up the static folder to serve static files.
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

// Or we could have given direct '../public




app.get('', (req, res) => {
    res.status(200).render('index');
});

// About Page
app.get('/about', (req, res) => {
    res.status(200).render('about');
});

// Weather Page
app.get('/weather', (req, res) => {
    res.status(200).render('weather');
});

// Error Page
app.get('*', (req, res) => {
    res.status(404).render('404');
});

// Listening to the server.
app.listen(port, () => {
    console.log("Server has been started");
});
