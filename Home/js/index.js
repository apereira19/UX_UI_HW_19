
$(document).ready(function(){
    $("#downArrow").click(function(){
        $('html, body').animate({
            scrollTop: $("#myWork").offset().top
        }, 2000);
 })});