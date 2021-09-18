let
    canv = document.getElementById('canvas');
    ctx  = canv.getContext('2d');

canv.width = 1000;
canv.height = 700;

//Code

canv.addEventListener('mousedown', function(){
    isMouseDown = true;
});

canv.addEventListener('mouseup', function(){
    isMouseDown = false;
    ctx.beginPath();
});

let 
    width_line = 10;
    color_line = 'red';

canv.addEventListener('mousemove', function(e){
    ctx.lineWidth = width_line * 2;
    if(isMouseDown)
    {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = color_line;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, width_line, 0, Math.PI * 2);
        ctx.fillStyle = color_line;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});