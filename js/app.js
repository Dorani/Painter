//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes

var color = $(".selected").css("background-color");//initial color when page loads
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d"); //context is a way for the computer to know where to draw for this particular canvas elements
var lastEvent;
var mouseDown = false; //when application loads the mouse is NOT down, therefore false.
  //when clicking on control list items
  $(".controls").on("click", "li", function(){
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

//document.getElementByTagName("canvas")[0]/ //above is a simply Jquery version

//On mouse event on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown){ //if you are clicking and dragging, excute this code
    context.beginPath(); // in the context we want to start a path
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY); //virtual pen we are asking to move to an area x and y coordinate
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color; // appropriate color is used for drawing.
    context.stroke();// draw a line from the above coordinates
    lastEvent = e;
}
}).mouseup(function(){
    mouseDown = false;
});
