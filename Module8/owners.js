// Title: Owners.js
// Author: Frank E. Ciszek
// Class: CIT-205 Web Development Tools
// Date: 10/17/2024
// Purpose: Build an owners router for the index.js page

const express = require('express');
const router = express.Router();
const error = "<h1>Invalid URL</h1>";

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
    res.send("<h1>GET All Owners</h1>" + ul_links);
});

router.put(path, function(req, res){
    res.send(error)
});

router.post(path, function(req, res){
    res.send("<h1>Add a new car owner to database</h1>");
});

router.delete(path, function(req, res){
    res.send(error)
});

path = '/new';

router.get(path, function(req, res){
    res.send("<h1>Enter a new car owner</h1> " + ul_links);
});

router.put(path, function(req, res){
    res.send(error);
});

router.post(path, function(req, res){
    res.send(error);
})

router.delete(path, function(req, res){
    res.send(error);
});

var path = '/:id';

router.get(path, function(req, res){
    res.send("<h1>List details of a single car owner</h1>"+ ul_links);
});

router.put(path, function(req, res){
    res.send("<<h1>Update details of an existing car owner");
});

router.post(path, function(req, res){
    res.send(error);
});

router.delete(path, function(req, res){
    res.send("<h1>Remove a car owner from database");
});

path  = '/:id/edit'

router.get(path, function(req, res){
    res.send("<h1>Display editing form</h1>" + ul_links);
});

router.put(path, function(req, res){
    res.send(error);
});

router.post(path, function(req, res){
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