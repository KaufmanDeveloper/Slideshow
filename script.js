/*
*  Slider jQuery application by Michael Kaufman
*  05/15/17
*/
// Variables
var iterator = 1;

//Slider height modulator
$(document).ready(function(){

  $("#slider").height($(window).width() / 4);
  $(window).resize(function() {
    $("#slider").height($(window).width() / 4);
});



//Buttons enlarge on mouse enter and shrink on mouse leave


    $("#left_button").mouseover(function(){
      $("#left_button").animate({
        width: "40"}, 'fast');
    });

    $("#left_button").mouseleave(function(){
      $("#left_button").animate({
        width: "30"}, 'fast');
    });

    $("#right_button").mouseover(function(){
      $("#right_button").animate({
        width: "40"}, 'fast');
    });

    $("#right_button").mouseleave(function(){
      $("#right_button").animate({
        width: "30"}, 'fast');
    });


//Left button operations

    $("#left_button").click(function(){
      //$("#left_button").hide();
      iterator--;
      switch(iterator){
        case 0:
          $('#slider').css("background-image", "url(images/island.jpg)");
          iterator = 3;
        break;

        case 1:
          $('#slider').css("background-image", "url(images/mountain.jpg)");
        break;

        case 2:
          $('#slider').css("background-image", "url(images/cat.jpeg)");
        break;
    }
    });


//Right button operations

    $("#right_button").click(function(){
      //$("#left_button").hide();
      iterator++;
      switch(iterator){
        case 4:
          $('#slider').css("background-image", "url(images/mountain.jpg)");
          iterator = 1;
        break;

        case 2:
          $('#slider').css("background-image", "url(images/cat.jpeg)");
        break;

        case 3:
          $('#slider').css("background-image", "url(images/island.jpg)");
        break;
    }
    });

  });
