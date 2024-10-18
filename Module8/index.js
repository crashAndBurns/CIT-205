/*
 * Program Name: Module 8 Assignment
 * Author: Frank E. Ciszek
 * Class: CIT-205, Web Development Tools
 * Date: 10/17/2024
 * Purpose: To practice using the express web application framework.
 * Also to learn about using  routes and middleware. Index.js is the
 * entrypoint for the package we will create. It will serve as the 
 * conductor for the remaining files.
 */

// Require the express library and create the 
// express app interface.
var express = require('express');
var app = express();
var error = '<h1>Error 404: Invalid URL';

// Require routers
var owners = require('./owners.js');
app.use('/owners', owners);
var cars = require('./cars.js');
app.use('/cars', cars);
var about = require('./about.js');
app.use('/about', about);

// Middlware logger
app.use(function(req, res, next){
    console.log("A new request received at" + Date.now());
    next();
});

// Designing the main page
app.get('/', function(req, res){
    res.send('\
        <h1>Welcome to The Main Page<h1><br></br>\
        <img src="public/image.jpg"><br></br>\
        <ul>\
            <li><a href="/">Main Page</a></li>\
            <li><a href="/about">About The Assignment</a></li>\
            <li><a href="/owners">List All Owners</a></li>\
            <li><a href="/owners/new">Enter a New Car Owner</a></li>\
            <li><a href="/owners/:id">List Details of a Single Owner"</a></li>\
            <li><a href="/owners/:id/edit">Edit Owner Details</a></li>\
            <li><a href="/cars">Display a Graph of Cars</a></li>\
        </ul>\
        '
    );
});

app.get('/*', function(req, res){
    res.send(error);
});

app.put('/*', function(req, res){
    res.send(error);
});

app.post('/*', function(req, res){
    res.send(error);
});

app.delete('/*', function(req, res){
    res.send(error);
});

// Listening on port 3000
app.listen(3000);
