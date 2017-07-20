<canvas id="mc" width="600" height="500" style="border:1px solid black" background='#00FFFF'>
</canvas>

var paddle;
var self;
var canvas;
var color;
function __init__(self,canvas,color) {
    self.canvas = canvas;
    self.id = canvas.create_rectangle(0,0,100,10,fill='#000000');
    self.canvas.move(self.id,200,300);

    self.x=0;


    self.canvas.width=self.canvas.winfo_width();

    self.canvas.bind_all("<KeyPress-Left>", selfmove_left);
    self.canvas.bind_all("<KeyPress-Right>", selfmove_right);

}

class Ball:
    function __init__(self, canvas, paddle, color);
        self.canvas = canvas
        self.paddle = paddle
        self.speed = 5
        self.id = canvas.create_oval(0,0,15,14,fill=colo)

var self;
var paddle;
var color;
var canvas;
var ctx;
var x=500;
var y=200;
var dx=16;
var dy=16;
var width=1375;
var height=250;
function circle() {
    ctx.beginPath();
    ctx.fillStyle = "cyan";
    ctx.arc(x, y, 30, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
}
function Clear() {
    ctx.clearRect(0, 0, width, height);
}
function init() {
    canvas = document.getElementById("mc");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 15);

}
function draw() {
    Clear();
    circle();
    if (x > width || x < 0)

      dx = -dx;
    if (y > height || y < 0)
      dy = -dy;
    x += dx;
    y += dy;


}
init();

