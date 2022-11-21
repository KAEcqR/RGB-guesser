var buttons1 = document.querySelector(".btn1");
var buttons2 = document.querySelector(".btn2");
var buttons3 = document.querySelector(".btn3");
var buttons4 = document.querySelector(".btn4");
var buttons5 = document.querySelector(".btn5");
var buttons6 = document.querySelector(".btn6");
var buttons = document.querySelectorAll(".button");
var button_reset = document.querySelector(".restart_btn");
var napis = document.querySelector(".rgb");
var correct_color;

window.onload = setRandomColors(), pickWinner();

button_reset.addEventListener("click",function(){
    window.location.reload();
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

function changeWinnerColor(element){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    element.style.backgroundColor = `rgb(${red},${green},${blue})`;
    napis.innerHTML = `RGB : (${red},${green},${blue})`;
    correct_color = `rgb(${red},${green},${blue})`;
}

function pickWinner(){
    let winning_num = Math.floor(Math.random()*(7 - 1) + 1);
    let winning_btn = document.querySelector(`.btn${winning_num}`);
    changeWinnerColor(winning_btn);

    winning_btn.addEventListener("click",function() {
        napis.innerHTML = "CORRECT";
        document.body.style.backgroundColor = correct_color;
        winning_btn.style.backgroundColor = correct_color;
    })
}
