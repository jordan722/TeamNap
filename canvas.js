var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

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
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#FF0000";
    ctx.fill();
});
