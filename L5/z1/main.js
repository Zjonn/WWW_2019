

document.getElementById('f1').onblur =
    function () {
        var acc_num = document.getElementById('f1')
        if (!acc_num.value.match(/\d{16}"/i)) {
            acc_num.style = "background-color:rgb(238, 4, 55)"
        }
        else if(acc_num.value.match(/\d{16}/i)){
            acc_num.style = "background-color:rgb(0, 235, 39)"
        }

    }

document.getElementById('f2').onblur =
    function () {
        var acc_num = document.getElementById('f2')
        if (!acc_num.value.match(/\d{11}/i)) {
            acc_num.style = "background-color:rgb(238, 4, 55)"
        }
        else if(acc_num.value.match(/\d{11}/i)){
            acc_num.style = "background-color:rgb(0, 235, 39)"
        }

    }

