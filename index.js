
function link(){
var randomnum1= Math.ceil((Math.random())*6);
var randomnum2= Math.ceil((Math.random())*6);
var randomimg1="images/dice"+randomnum1+".png";
var randomimg2="images/dice"+randomnum2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2);
if (randomnum1>randomnum2){
  document.querySelector("h1").innerHTML="player 1 wins 🚩";
}
else if (randomnum2>randomnum1) {
  document.querySelector("h1").innerHTML="player 2 wins 🚩";

}
else {
  document.querySelector("h1").innerHTML="Draw😰";
}
}
