//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes

var color = $(".selected").css("background-color");//initial color when page loads
  //when clicking on control list items
  $(".controls li").click(function(){
    //Deselect sibling elements
    $(this).siblings().removeClass("selected");//grab sibling, remove class selected
    //Select clicked element
    $(this).addClass("selected");//when we click on it, it will add the class selected
    //cashe current color
    color = $(this).css("background-color");//cashe color to be used in the future
  });


//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color selected or hide it
  changeColor();//calling the change color
  $("#colorSelect").toggle();
});

function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb("+ r + ", " + g + ", " + b + ")"); //update the new color
  //Update the new color span
}
//When color sliders changes
$("input[type=range]").change(changeColor);//update when its changed

//When "add color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  //append new color
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();
});



//On mouse event on the canvas
 //Draw lines
