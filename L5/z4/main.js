var canvas = document.getElementById("myCanvas");
var doc_ctx = canvas.getContext("2d");

let max_depth = 7
var depth = 1

let start_triangle = [400, 350, 750]

var to_draw = []
var interval

function draw_next_level() {
    if (depth >= max_depth) {
        clearInterval(interval)
    }

    var i = 0
    for (i = 0; i < 3 ** depth; i++) {
        let triangle = to_draw.shift()
        draw_triangle(doc_ctx, triangle)
        add_subtriangles(triangle)
    }

    depth += 1
}

function draw_triangle(ctx, triangle) {
    let [cx, cy, side] = triangle
    var h = side * (Math.sqrt(3) / 2);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(cx, cy);

    ctx.beginPath();

    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-side / 2, h / 2);
    ctx.lineTo(side / 2, h / 2);
    ctx.lineTo(0, -h / 2);

    ctx.closePath();

    ctx.strokeStyle = "#ff0000";
    ctx.stroke();
}

function add_subtriangles(triangle) {
    let [x, y, side] = triangle
    let n_side = side / 2

    to_draw.push([x, y - side * 0.216, n_side])
    to_draw.push([x - side * 0.2489, y + side * 0.216, n_side])
    to_draw.push([x + side * 0.2489, y + side * 0.216, n_side])
}

document.addEventListener("DOMContentLoaded", function () {
    draw_triangle(doc_ctx, start_triangle)
    add_subtriangles(start_triangle)

    interval = setInterval(draw_next_level, 1000);
});
