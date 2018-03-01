 
$(document).ready(function(){
  $(".panelFur, .panelHome, .panelAppl ").hide();
    $(".toggleList").click(function(){
        $(".panelFur").slideToggle("slow");
    });


    $(".toggleHome").click(function(){
        $(".panelHome").toggle("slow");
    });


    $(".toggleAppl").click(function(){
        $(".panelAppl").slideToggle("slow");
    });
});