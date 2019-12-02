state = {};
var select_all = false

$(document).ready(function () {
    $('.box').each(function (_, e) {
        state[$(this).attr('id')] = false;
    });

    $('.box').click(function (e) {
        let box_id = e.target.closest(".box").id
        state[box_id] = !state[box_id]
        set_border(box_id)
    });

    $('#log').click(function (e) {
        var selected = ""
        $('.box').each(function (_, e) {
            let box_id = $(this).attr('id')
            if (state[box_id]) {
                selected += box_id + " "
            }
        });
        $('#selected').val(selected)
    });

    $('#select').click(function (e) {
        select_all = !select_all
        $('.box').each(function (_, e) {
            let box_id = $(this).attr('id')
            state[box_id] = select_all
            set_border(box_id)
        });
    });
});

function set_border(box) {
    if (state[box]) {
        $("#" + box).css("border-color", "red")
    } else {
        $("#" + box).css("border-color", "")
    }
}