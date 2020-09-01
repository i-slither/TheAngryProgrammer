const path = require('path');
const express = require("express");

const router = express.Router();

router.get('/add-post', (req, res) => {
   res.render('add-post'); 
});

router.post('/add-post', (req, res) => {
    res.render('add-post');
});

module.exports = router;