//////////////////////////////////////////////////////////////////////////////////////
// 
// @author    Addison Raak
// @version   1.0
// 
// This JavaScript file was created for CS341 hw05 at the University of Portland for Dr. Tribelhorn.
// 
// Last Updated on 10.04.2021
// 
//////////////////////////////////////////////////////////////////////////////////////


var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');


router.post('/', function(req, res, next) {
    var quantity = req.body.quantity;
	var topping = req.body.topping;
	var notes = req.body.notes;

	// Get the last ORDER ID from the database, going to increment this to make sure everyone has a unique orderID
	dbms.dbquery("SELECT MAX(ORDERID) AS id FROM ORDERS",
        function(err, res) {
            var orderID = res[0].id + 1;
            console.log("Processing new order #" + orderID);
        });

	// INSERT the new order to the database
	dbms.dbquery("INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES ('" + orderID + "', 'Oct', '4', '" + quantity + "', '" + topping + "', '" + notes + "');");
});


module.exports = router;