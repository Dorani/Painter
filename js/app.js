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
  $("#colorSelect").toggle();
});
 

//When color sliders changes
 //Update the new color span

//When new color is pressed
 //Append the color to the controls ul
 //Select the new color

//On mouse event on the canvas
 //Draw lines
