let device = document.querySelector('body');
let div = document.querySelectorAll('div');
let w = window.innerWidth;
let h = window.innerHeight;
const text = document.createElement('h1');

$(document).ready(function(){
    checkScreen();
    $(window).resize(function(){
        w = window.innerWidth;
        h = window.innerHeight;
        checkScreen();
    });
});

function checkScreen() {
    if (w > 1200) {
        $(div).hide();
        text.innerText = "Sorry, your device is too big!"
        text.style.cssText = "position: absolute; width: 100%; heigth: 100%; color: white; text-align: center;"
        document.body.appendChild(text);
    }
    else if (w < 1200) {
        text.remove();
        $(div).show(); 
    }
}

function change(value) {
    let category = document.getElementById('category');
    let alfabeto = document.getElementById('alfabeto');
    let alfabetoList = document.getElementById('alfabeto2');

    console.log(alfabeto);
    if (value == alfabeto) {
        category.style.opacity = "0.4"
        alfabeto.style.opacity = "1"
        alfabetoList.style.overflow = "visible"
        alfabetoList.style.opacity = "1"
    }
    else if (value == category) {
        alfabeto.style.opacity = "0.4"
        category.style.opacity = "1"
        alfabetoList.style.opacity = "0"
        alfabetoList.style.overflow = "hidden"
    }
}