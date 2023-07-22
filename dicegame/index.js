var n1 = Math.floor(Math.random()*6)+1;
var randsrc = "images\\dice"+n1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randsrc);

var n2= Math.floor(Math.random()*6)+1;
var randimg="images\\dice"+n2+".png";
document.querySelectorAll('img')[1].setAttribute("src",randimg);

if(n1>n2){
    document.querySelector("h1").textContent="🚩player1 wins";
}
else if(n2>n1){
    document.querySelector("h1").innerHTML="🚩player2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}