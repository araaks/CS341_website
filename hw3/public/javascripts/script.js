//////////////////////////////////////////////////////////////////////////////////////
// 
// @author    Addison Raak
// @version   3.0
// 
// This JavaScript file was created for CS341 hw03 at the University of Portland for Dr. Tribelhorn.
// 
// Last Updated on 09.13.2021
// 
//////////////////////////////////////////////////////////////////////////////////////

// eventHandler to check to see if the Notes form has the word vegan in it. If it does, send error. Else, success.
eventHandler = function ( event ) {
    // gets the text that is in the textarea
    var text = $("#textbox").val();
    var parsed = text.split(" ");

    // checks to see if the word vegan is in the NOTES section. If it is, send alert.
    if (parsed.includes("vegan")) {
        alert("WARNING: Cheesecake is not a vegan product. Cheesecake contains dairy products.");
    } else { // else, remove the form secion of the page, show success text
        $("#quantity").hide();
        $("#notes").hide();
        $("#textbox").hide();
        $("#orderButton").hide();
        $("#orderTable").hide();
        $("#success").show();
    }
}

$(function () {
    // hide the success text after the document has been loaded, but before the button is pressed
    $("#success").hide();

    $("#orderButton").click(eventHandler);
});