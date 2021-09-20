const canv = document.getElementById("canvas"); ctx = canv.getContext("2d"); 
let isMouseDown = null;

canv.addEventListener("mousedown", function () {
  isMouseDown = true;
});

canv.addEventListener("mouseup", function () {
  isMouseDown = false;
  ctx.beginPath();
});

let width_line = 5; color_line = "red";

canv.addEventListener("mousemove", function (e) {
  let rect = canvas.getBoundingClientRect(); 
  ctx.lineWidth = width_line * 2;
  if (isMouseDown) {
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = color_line;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, width_line, 0, Math.PI * 2);
    ctx.fillStyle = color_line;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }
});
