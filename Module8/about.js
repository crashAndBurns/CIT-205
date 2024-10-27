// Title: Owners.js
// Author: Frank E. Ciszek
// Class: CIT-205 Web Development Tools
// Date: 10/17/2024
// Purpose: Build an about router for the index.js page

const express = require('express');
const router = express.Router();
const error = '<h1>Invalid URL</h1>';

var path = '/';

const ul_links = '<ul>\
                    <li><a href="/">Main Page</a></li>\
                    <li><a href="/about">About The Assignment</a></li>\
                    <li><a href="/owners">List All Owners</a></li>\
                    <li><a href="/owners/new">Enter a New Car Owner</a></li>\
                    <li><a href="/owners/:id">List Details of a Single Owner</a></li>\
                    <li><a href="/owners/:id/edit">Edit Owner Details</a></li>\
                    <li><a href="/cars">Display a Graph of Cars</a></li>\
                </ul>'

router.get(path, function(req, res){
    res.send('\
        <h1>About This Project</h1>\
        <p>\
            This purpose of this project is to \
            use JavaScript and Express to practice \
            making a Node/Express application for a \
            car owner database. \
        </p>\
        <p>\
            In this project we: \
            <ul>\
                <li>Built a Node.js Application using Express</li>\
                <li>Built routes for the Express application</li>\
                <li>Built middleware that performs actions on a request \
                    before the response is sent.\
            </ul>\
        ' + ul_links
    )
});

router.put(path, function(req, res){
    res.send(error);
});

router.post(path, function(req, res){
    res.send(error);
});

router.delete(path, function(req, res){
    res.send(error);
});

path = '/*';

router.get(path, function(req, res){
    res.send(error);
});

router.put(path, function(req, res){
    res.send(error);
});

router.post(path, function(req, res){
    res.send(error);
});

router.delete(path, function(req, res){
    res.send(error);
});

// Export this router to index.js
module.exports = router;