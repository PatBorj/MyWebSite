// js/main.js

var slider_img = document.querySelector('.slider-img');
var images = ['News1.jpg', 'News2.jpg', 'News3.jpg', 'News4.jpg', 'News5.jpg'];
var i = 0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if(i >= images.length-1) i=-1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'images/' + images[i]);
}

document.getElementById("button-login").addEventListener("click", function(){
    document.querySelector(".popup").style.visibility = "visible";
})

document.querySelector(".exit").addEventListener("click", function(){
    document.querySelector(".popup").style.visibility = "hidden";
})

