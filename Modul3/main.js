var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(20, 20, 150, 100);

ctx.beginPath();
ctx.arc(300, 80, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#0000FF";
ctx.fill();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(380, 200);
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 220);
ctx.lineTo(100, 380);
ctx.lineTo(300, 380);
ctx.closePath();
ctx.fillStyle = "#00FF00";
ctx.fill();

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText("Canvas", 170, 170);