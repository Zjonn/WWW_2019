var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let max_depth = 0
var depth = 0

var to_draw = []
var interval

draw_triangle(ctx, 50, 50, 50)

function draw_next() {
    var i = 0
    for (i = 0; i < 3; i++) {
        to_draw = to_draw.shift()

        draw_triangle(ctx, to_draw[2], to_draw[0], to_draw[1])
    }

    if (depth >= max_depth) {
        clearInterval(interval)
    }
    depth += 1
}


function draw_triangle(ctx, side, cx, cy) {
    var h = side * (Math.sqrt(3) / 2);

    ctx.strokeStyle = "#ff0000";
    ctx.translate(cx, cy);

    ctx.beginPath();

    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-side / 2, h / 2);
    ctx.lineTo(side / 2, h / 2);
    ctx.lineTo(0, -h / 2);

    ctx.stroke();
}

document.addEventListener("DOMContentLoaded", function () {
    draw_triangle(ctx, 100, 100, 100)

    to_draw.push([25, 75, 25])
    to_draw.push([50, 25, 25])
    to_draw.push([75, 75, 25])

    interval = setInterval(draw_next, 100);
});
