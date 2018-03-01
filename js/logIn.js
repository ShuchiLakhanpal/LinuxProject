$(document).ready(function() {
$("#signup").click(function() {
$("#first").slideUp("slow", function() {
$("#second").slideDown("slow");
});
});
// On Click SignIn It Will Hide Registration Form and Display Login Form
$("#signin").click(function() {
$("#second").slideUp("slow", function() {
$("#first").slideDown("slow");
});
});
});

$(function(){
    // $("#second").hide();
    $("#signup").click(function() {
    	$("#second").removeClass('hidden'); 
    	});
});