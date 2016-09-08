// JavaScript demonstration
var changeBg = function (event) {
	"use strict";
    console.log("method called");
    var me = event.target;
	var square = document.getElementById("square");
    square.style.backgroundColor = "#ffaa44";
    me.setAttribute("disabled", "disabled");
    
};



var button = document.querySelector("button"); 
button.addEventListener("click", changeBg); 
console.log(button);