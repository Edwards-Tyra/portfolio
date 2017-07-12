<canvas id="mc" width="1000" height="200" style="border:1px solid black">
</canvas>
<script>
var canvas;
var ctx;
var x=500;
var y=200;
var dx=16;
var dy=16;
var width=1000;
var height=200;
function circle()
{
ctx.beginPath();
ctx.fillStyle="cyan";
ctx.arc(x,y,30,0,Math.PI*2,true);
ctx.fill();
ctx.closePath();
}
function Clear()
{
ctx.clearRect(0,0,width,height);
}
function init()
{
canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");
return setInterval(draw, 15);
    
}
function draw()
{
Clear();
circle();
if (x > width || x < 0)
   
dx=-dx;
if(y>height||y<0)
dy= -dy;
x+=dx;
y+=dy;


}
init();
</script>