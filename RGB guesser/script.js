var buttons1 = document.querySelector(".btn1");
var buttons2 = document.querySelector(".btn2");
var buttons3 = document.querySelector(".btn3");
var buttons4 = document.querySelector(".btn4");
var buttons5 = document.querySelector(".btn5");
var buttons6 = document.querySelector(".btn6");
var button_reset = document.querySelector(".restart_btn");

window.onload = setRandomColors();

button_reset.addEventListener("click",function(){
    setRandomColors();
});

function changeColor(element){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    element.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function setRandomColors(){
    changeColor(buttons1);
    changeColor(buttons2);
    changeColor(buttons3);
    changeColor(buttons4);
    changeColor(buttons5);
    changeColor(buttons6);
}