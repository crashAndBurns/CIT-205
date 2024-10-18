// Title: Owners.js
// Author: Frank E. Ciszek
// Class: CIT-205 Web Development Tools
// Date: 10/17/2024
// Purpose: Build an cars router for the index.js page

var express = require('express');
var router = express.Router();
var error = '"<h1>Invalid URL</h1>"';

router.get('/', function(req, res){
    res.send("<h1>A Graph of Owners by Car Make");
});

router.put('/', function(req, res){
    res.send(error);
});

router.post('/', function(req, res){
    res.send(error);
});

router.delete('/', function(req, res){
    res.send(error);
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