//////////////////////////////////////////////////////////////////////////////////////
// 
// @author    Addison Raak
// @version   2.0
// 
// This JavaScript file was created for CS341 hw03 at the University of Portland for Dr. Tribelhorn.
// 
// Last Updated on 10.04.2021
// 
//////////////////////////////////////////////////////////////////////////////////////


var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');


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

    // HW 4
    // res.json(dataArray);

    // HW 5
    // This can probably be done WAY better but it worked lol.
    // Ran into an issue where the data on the website would update to the correct data AFTER I switched to a different month
    dbms.dbquery("SELECT SUM(QUANTITY) AS cherryNum FROM ORDERS WHERE MONTH='" + req.body.month + "'AND TOPPING='cherry';",
        function(err, res) {
            if( res[0].cherryNum )
                dataArray[0].quantity = res[0].cherryNum;
            else
                dataArray[0].quantity = 0;
        });

    dbms.dbquery("SELECT SUM(QUANTITY) AS plainNum FROM ORDERS WHERE MONTH='" + req.body.month + "'AND TOPPING='plain';",
        function(err, res) {
            if( res[0].plainNum )
                dataArray[1].quantity = res[0].plainNum;
            else
                dataArray[1].quantity = 0;
        });

    dbms.dbquery("SELECT SUM(QUANTITY) AS chocolateNum FROM ORDERS WHERE MONTH='" + req.body.month + "'AND TOPPING='chocolate';",
        function(err, res) {
            if( res[0].chocolateNum )
                dataArray[2].quantity = res[0].chocolateNum;
            else
                dataArray[0].quantity = 0;
        });

    res.json(dataArray);
});


module.exports = router;