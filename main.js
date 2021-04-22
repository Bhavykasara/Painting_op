var bevent="empty";
var lx,ly;
var canvas=document.getElementById("mc");
var ctx=canvas.getContext("2d");
var wid=5;
var radius=40;
var color="black";
var colour="white";

document.getElementById("ra").value=40;
document.getElementById("lw").value=3;

canvas.addEventListener("mousedown",mousedown);

function mousedown(e) {
   bevent="mouseDown";
   color=document.getElementById("co").value;
   wid=document.getElementById("lw").value;
   radius=document.getElementById("ra").value;
}

canvas.addEventListener("mouseup",mouseup);

function mouseup(e) {
   bevent="mouseUP";
   color=document.getElementById("co").value;
   wid=document.getElementById("lw").value;
   radius=document.getElementById("ra").value;
}

canvas.addEventListener("mouseleave",mouseleave);

function mouseleave(e) {
   bevent="mouseleave";
}

canvas.addEventListener("mousemove",mousemove);

function mousemove(e) {
     cx = e.clientX-275;
    cy = e.clientY;
      if (bevent=="mouseDown") {
        
        
        ctx.beginPath();
        ctx.lineWidth=wid;
        ctx.strokeStyle=color;
        ctx.moveTo(lx,ly);
       ctx.lineTo(cx,cy);
       ctx.stroke();
}
    ly=cy;
    lx=cx;
}
