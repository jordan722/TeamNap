var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//canvas.addEventListener("click", rectangle);
canvas.addEventListener("click", connect);

clear.addEventListener("click", function(e) {
    ctx.clearRect(0,0,500,300);
    ctx.beginPath();
});

function rectangle(e) {
    ctx.fillRect(e.offsetX, e.offsetY, 100, 100);
}

function connect(e) {
    ctx.arc(e.offsetX, e.offsetY, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
}
