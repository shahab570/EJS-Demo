const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.use(expressLayouts);
app.set('layout','./layouts/full-width.ejs')
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index', {
        title: "HOme page"
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        layout: './layouts/sidebar',
        title: "About page"
    });
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))
    ;