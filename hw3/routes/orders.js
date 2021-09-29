//////////////////////////////////////////////////////////////////////////////////////
// 
// @author    Addison Raak
// @version   1.0
// 
// This JavaScript file was created for CS341 hw03 at the University of Portland for Dr. Tribelhorn.
// 
// Last Updated on 09.20.2021
// 
//////////////////////////////////////////////////////////////////////////////////////


var express = require('express');
var router = express.Router();

// Create array of data to be shown for HW4 when returning a JSON Object
var dataArray = [{"topping": "cherry", "quantity": "2"}, 
                   {"topping": "plain", "quantity": "6"}, 
                   {"topping": "chocolate", "quantity": "3"}];

/* SENDS the JSON object with get. */
router.get('/', function(req, res, next) {
  res.json(dataArray);
});

/* SENDS the JSON object with post. */
router.post('/', function(req, res, next) {
  // used to print the data (req and dataArray) to the console for debugging purposes
  // const obj = JSON.parse(JSON.stringify(req.body));
  // console.log("data =", obj);
  // console.log(JSON.stringify(dataArray));
  res.json(dataArray);
});

module.exports = router;