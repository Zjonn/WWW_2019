document.getElementById('f1').onblur =
    function () {
        var acc_num = document.getElementById('f1')
        if (!acc_num.value.match("\d{16}")) {
            alert("Incorrect value")
        }

    }

    document.getElementById('f2').onblur =
    function () {
        var acc_num = document.getElementById('f2')
        if (!acc_num.value.match("\d{11}")) {
            alert("Incorrect value")
        }

    }