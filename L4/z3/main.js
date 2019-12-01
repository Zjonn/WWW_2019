var blocks = document.getElementsByName("b");
var actual_block_idx = 0
var actual_block_pos = 0

let size = blocks.length

let max_y = 50
let step = 3
var dir = 1

function update_pos() {
    if (dir == 1 && actual_block_pos >= max_y) {
        actual_block_idx += 1
        actual_block_pos = 0
        if (actual_block_idx == size) {
            actual_block_idx = 0
            actual_block_pos = 50
            dir = -1
        }
    } else if (dir == -1 && actual_block_pos <= 0) {
        actual_block_idx += 1
        actual_block_pos = max_y
        if (actual_block_idx == size) {
            actual_block_idx = 0
            actual_block_pos = 0
            dir = 1
        }
    }
    actual_block_pos += step * dir

    let actual_block = blocks[actual_block_idx]
    actual_block.style.top = actual_block_pos + "px"
}

document.addEventListener("DOMContentLoaded", function () {
    blocks.forEach(element => {
        element.style.backgroundColor = getRandomColor()
    });
    setInterval(update_pos, 10);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
