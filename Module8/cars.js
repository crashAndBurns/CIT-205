// Title: Owners.js
// Author: Frank E. Ciszek
// Class: CIT-205 Web Development Tools
// Date: 10/17/2024
// Purpose: Build an cars router for the index.js page

const express = require('express');
const fs = require('fs');
const router = express.Router();
const error = "<h1>Invalid URL</h1>";
router.use(express.json());

var path = '/';

// Return an object of makes and how many owners each make has
router.get(path, function(req, res){
    owners = getOwnerData();

    const ownersCount = owners.reduce((acc, car) => {
        if (!acc[car.car.make]) {
            acc[car.car.make] = {numOwners: 0};
        }

        acc[car.car.make].numOwners += 1;
        return acc;
    }, {});
    res.send(ownersCount)
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