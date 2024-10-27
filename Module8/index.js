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
const express = require('express');
const app = express();
const error = '<h1>Error 404: Invalid URL';
const port = 3000;

// Build a logger to get Date/Time, method, and url requested
const logger = (req, res, next) => {
    var current_datetime = new Date();
    var formatted_date = 
        current_datetime.getFullYear() +
        "/" +
        (current_datetime.getMonth() + 1) +
        "/" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" + 
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();

        var method = req.method;
        var url = req.url;
        let log = formatted_date + " " + method + ": " + url;

        console.log(log);
        next();   
};

// Middlware logger
app.use(logger);

// Require routers
const owners = require('./owners.js');
app.use('/owners', owners);
const cars = require('./cars.js');
app.use('/cars', cars);
const about = require('./about.js');
app.use('/about', about);

// Designing the main page
var path = '/'
const ul_links = '<ul>\
                    <li><a href="/">Main Page</a></li>\
                    <li><a href="/about">About The Assignment</a></li>\
                    <li><a href="/owners">List All Owners</a></li>\
                    <li><a href="/owners/new">Enter a New Car Owner</a></li>\
                    <li><a href="/owners/:id">List Details of a Single Owner</a></li>\
                    <li><a href="/owners/:id/edit">Edit Owner Details</a></li>\
                    <li><a href="/cars">Display a Graph of Cars</a></li>\
                </ul>'

app.get(path, function(req, res){
    res.send('\
        <h1>Welcome to The Main Page</h1>\
        <img src="https://wallpaperaccess.com/full/433423.jpg"/><br></br>' +
        ul_links
    );
});



app.put(path, function(req, res){
    res.send(error);
});

app.post(path, function(req, res){
    res.send(error);
});

app.delete(path, function(req, res){
    res.send(error);
});

path = '/*'

app.get(path, function(req, res){
    res.send(error);
});

app.put(path, function(req, res){
    res.send(error);
});

app.post(path, function(req, res){
    res.send(error);
});

app.delete(path, function(req, res){
    res.send(error);
});

// Listening on port 3000
app.listen(port, () => {
    console.log('App is listening on port ' + port);
});
