const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000, () => {
    console.log("Server connected at port 3000");
});