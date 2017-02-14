var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
/*
canvas.addEventListener("click", function(e) {
    ctx.fillRect(e.clientX-10,e.clientY-80,100,100);
});
*/

clear.addEventListener("click", function(e) {
    ctx.clearRect(0,0,500,300);
    ctx.beginPath();
});

canvas.addEventListener("click", function(e) {
    ctx.arc(e.clientX-10, e.clientY-80, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "FF0000";
    ctx.fill();
    ctx.lineTo(e.clientX-10, e.clientY-80);
});
