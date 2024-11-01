// Title: Owners.js
// Author: Frank E. Ciszek
// Class: CIT-205 Web Development Tools
// Date: 10/17/2024
// Purpose: Build an owners router for the index.js page

const express = require('express');
const fs = require('fs');
const router = express.Router();
const error = "<h1>Invalid URL</h1>";
router.use(express.json());

const ul_links = '<ul>\
                    <li><a href="/">Main Page</a></li>\
                    <li><a href="/about">About The Assignment</a></li>\
                    <li><a href="/owners">List All Owners</a></li>\
                    <li><a href="/owners/new">Enter a New Car Owner</a></li>\
                    <li><a href="/owners/:id">List Details of a Single Owner</a></li>\
                    <li><a href="/owners/:id/edit">Edit Owner Details</a></li>\
                    <li><a href="/cars">Display a Graph of Cars</a></li>\
                </ul>'

var path = '/';

// Get a list of all owners
router.get(path, function(req, res) {
    const owners = getOwnerData();    
    res.send(owners);
});

router.put(path, function(req, res) {
    res.send(error);
});

// Add a new owner to the list
router.post(path, function(req, res) {
    const existingOwners = getOwnerData();
    const ownerData = req.body;

    // Input validation
    if(ownerData.id == null || ownerData.first_name == null || ownerData.last_name == null || ownerData.email == null || ownerData.car == null) {
        return res.status(401).send({error: true, msg: "Owner Data Missing"});
    }
    
    // Check if user id or user name already exists
    const findExistOwner = existingOwners.find(owner => (owner.first_name === ownerData.first_name && owner.last_name === ownerData.last_name));
    const findExistId = existingOwners.find(owner => owner.id === ownerData.id)
    if (findExistId) {
        return res.status(409).send({error: true, msg: "Duplicate id entered."});
    } else if (findExistOwner) {
        return res.status(409).send({error: true, msg: "Duplicate owner entered"});
    }

    // appends the new user data
    // Only modifies the JS object
    existingOwners.push(ownerData);

    // save the new data
    saveOwnerData(existingOwners);
    res.send({success: true, msg: "User data added successfully"});
});

router.delete(path, function(req, res){
    res.send(error);
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

// Return details of a single car owner
router.get(path, function(req, res){
    // get owner data from JSON
    const owners = getOwnerData();
    id = getOwnerId(req);
    // console.log(id);

    // Look for the id in the database
    findExistId = owners.find(owner => owner.id === id);
    if (findExistId) {
        // filter result by owner requested owner id
        // and send it back to the console
        res.send(owners.filter(function(item) {
            return item.id == id;
    }));
    } else {
        res.status(409).send({error: true, msg: "Owner Id not found"})
    }
});

// Update details of an existing owner
router.put(path, function(req, res){
    // Get Owner Info from JSON
    var owners = getOwnerData();
    const id = getOwnerId(req);
    
    // Get request body
    const ownerData = req.body;

    // Search for owner ID in  database, return an error if not found
    // find the index of object by id
    index = owners.findIndex(owner => owner.id === id);

    if (index != -1) {
        if (ownerData.first_name != null) {
            owners[index].first_name = ownerData.first_name;
        } 
        
        if (ownerData.last_name != null) {
            owners[index].last_name = ownerData.last_name;
        }

        if (ownerData.email != null) {
            owners[index].email = ownerData.email;
        }

        if (ownerData.car.make != null) {
            owners[index].car.make =  ownerData.car.make;
        }

        if (ownerData.car.model != null) {
            owners[index].car.model = ownerData.car.model;
        }

        if (ownerData.car.year != null) {
            owners[index].car.year = ownerData.car.year;
        }

        if (ownerData.car.vin != null) {
            owners[index].car.vin = ownerData.car.vin;
        }
        saveOwnerData(owners);

        return res.send({success: true, msg: "Owner data updated successfully."});
    } else {
        return res.status[409].send({error: true, msg: "Invalid ID entered"});
    }    
});

router.post(path, function(req, res){
    res.send(error);
});

// Remove a car owner from the database
router.delete(path, function(req, res){
    // Get Owner Info from JSON
    var owners = getOwnerData();
    const id = getOwnerId(req);

    const index = owners.findIndex(owner => owner.id === id);

    // Delete the item with id at index 
    if (index != -1) {
        owners.splice(index, 1);

        // Save the owner data in the  database
        saveOwnerData(owners);

        return res.send({success: true, msg: "Owner " + id + " deleted successfully"});
    } else {
        return res.status(409).send({error: true, msg: "Owner not found."});
    }
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


// Utility Functions
// Write data from a owner file
const saveOwnerData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('./public/car_owners.json', stringifyData);
};

// get Data from a json file
const getOwnerData = () => {
    const jsonData = fs.readFileSync('./public/car_owners.json');
    return JSON.parse(jsonData);
};

// get user id from url
const getOwnerId = (request) => {
    var reqUrl = Array.from(request.url);
    id = "";
    i = 1;
    while (i < reqUrl.length) {
    id += reqUrl[i];
    i++
    }
    
    result = Number(id);

    return result;
};