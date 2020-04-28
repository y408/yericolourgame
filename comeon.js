var colors = generaterandmnumbers(9);
var squares = document.querySelectorAll(".squares");
var colordisplay = document.getElementById("see");
var messagedisplay = document.querySelector("#lot");
var pickedcolor = pickedcolor();
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var resetbotton = document.querySelector("#reset");
    colordisplay.textContent   =   pickedcolor;
    resetbotton.addEventListener("click", function(){
    colors = generaterandmnumbers(9);
    pickedcolor = pickedcolor();
    colordisplay.textContent   =   pickedcolor;
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];}
  
  })
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
     var clickedcolor = this.style.background;
     if (clickedcolor === pickedcolor){
       messagedisplay.textContent = "CORRECT"
       for (let i = 0; i < squares.length; i++) {
           squares[i].style.background = clickedcolor;
           h1.style.background = clickedcolor;
          
          }

      }else{
        messagedisplay.textContent = "TRY AGAIN "
        this.style.background = "#232323";

      }

  });
}
function pickedcolor(){
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generaterandmnumbers(num){
  var arr = []
  for ( var i = 0; i < num; i++){
      arr.push(randomcolor())
  }
  return arr;

}
function randomcolor(){
  var r = Math.floor(Math.random() * 255)
  var g = Math.floor(Math.random() * 255)
  var b = Math.floor(Math.random() * 255)
   return  color = "rgb(" + r + ", " + g + ", " + b +")";   
}



