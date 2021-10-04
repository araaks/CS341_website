//////////////////////////////////////////////////////////////////////////////////////
// 
// @author    Addison Raak
// @version   4.0
// 
// This JavaScript file was created for CS341 hw03 at the University of Portland for Dr. Tribelhorn.
// 
// Last Updated on 10.04.2021
// 
//////////////////////////////////////////////////////////////////////////////////////

// eventHandler to check to see if the Notes form has the word vegan in it. If it does, send error. Else, success.
eventHandler = function ( event ) {
    // gets the text that is in the textarea
    var text = $.trim($("#textbox").val());
    var parsed = text.split(" ");

    // checks to see if the word vegan is in the NOTES section. If it is, send alert.
    if (parsed.includes("vegan")) {
        alert("WARNING: Cheesecake is not a vegan product. Cheesecake contains dairy products.");
    } else { 
        // else, remove the form secion of the page, show success text
        $("#quantity").hide();
        $("#notes").hide();
        $("#textbox").hide();
        $("#orderButton").hide();
        $("#orderTable").hide();
        $("#success").show();

        // fetch the quantity and toppings from user input (we already have the notes above)
        var quantityInput = $("#numToppings").find(":selected").text();
        var toppingInput = $("input[name='radioGroup']").val();
        var orderInput = {"quantity":quantityInput, "topping":toppingInput, "notes":text};

        // alert(orderInput);

        $.post('/new_order', orderInput);
    }
}

$(function () {
    // hide the success text after the document has been loaded, but before the button is pressed
    $("#success").hide();

    // EVENT CLICKED
    $("#orderButton").click(eventHandler);

    // function for when the user hovers over the dropdown menu
    $("#dropdown").hover(function() {
        $(this).attr('size', 3);
    }, function() {
        $(this).attr('size', 1);
    });

    // Referenced this link when trying to figure out how to send a post request.
    // https://stackoverflow.com/questions/25881204/how-to-use-jquery-post-method-to-submit-form-values
    $("#dropdown").on('change', function() {
        // variable being passed to the post
        var month = $("#dropdown").find(":selected").text();
        var monthData = { "month": month };

        // sends post request to the server, then recieves the data back in req
        $.post('/orders', monthData, function(req, rec, next) {
            // alert(JSON.stringify(req));
            $("#line0").text(req[0].quantity + " " + req[0].topping);
            $("#line1").text(req[1].quantity + " " + req[1].topping);
            $("#line2").text(req[2].quantity + " " + req[2].topping);
        });
    });
});