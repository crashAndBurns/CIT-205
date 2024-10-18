// Title: Owners.js
// Author: Frank E. Ciszek
// Class: CIT-205 Web Development Tools
// Date: 10/17/2024
// Purpose: Build an cars router for the index.js page

var express = require('express');
var router = express.Router();
var error = '"<h1>Invalid URL</h1>"';

router.get('/', function(req, res){
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
        ')
});



// Export this router to index.js
module.exports = router;