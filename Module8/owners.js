// Title: Owners.js
// Author: Frank E. Ciszek
// Class: CIT-205 Web Development Tools
// Date: 10/17/2024
// Purpose: Build an owners router for the index.js page

var express = require('express');
var router = express.Router();
var error = '"<h1>Invalid URL</h1>"';

router.get('/', function(req, res){
    res.send("<h1>GET All Owners</h1>");
});

router.put('/', function(req, res){
    res.send(error)
});

router.post('/', function(req, res){
    res.send("<h1>Add a new car owner to database</h1>");
});

router.delete('/', function(req, res){
    res.send(error)
});

router.get('/new', function(req, res){
    res.send("<h1>Enter a new car owner</h1>");
});

router.put('/new', function(req, res){
    res.send(error);
});

router.post('/new', function(req, res){
    res.send(error);
})

router.delete('/new', function(req, res){
    res.send(error);
});

router.get('/:id', function(req, res){
    res.send("<h1>List details of a single car owner</h1>");
});

router.put('/:id', function(req, res){
    res.send("<<h1>Update details of an existing car owner");
});

router.post('/:id', function(req, res){
    res.send(error);
});

router.delete('/:id', function(req, res){
    res.send(error);
});

router.get('/:id/edit', function(req, res){
    res.send("<h1>Display editing form</h1>");
});

router.put('/:id/edit', function(req, res){
    res.send(error);
});

router.post('/:id/edit', function(req, res){
    res.send(corndog);
});

router.delete('/:id', function(req, res){
    res.send("<h1>Remove a car owner from database");
});

router.get('/*', function(req, res){
    res.send(error);
});

router.put('/*', function(req, res){
    res.send(error);
});

router.post('/*', function(req, res){
    res.send(error);
});

router.delete('/*', function(req, res){
    res.send(error);
});

// Export this router to index.js
module.exports = router;