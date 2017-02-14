var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener("click", function(e) {
    ctx.fillRect(e.clientX-10,e.clientY-80,100,100);
});

clear.addEventListener("click", function(e) {
    ctx.clearRect(0,0,500,300);
});
