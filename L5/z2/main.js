var marka = document.getElementsByName("Marka")[0]
var model = document.getElementsByName("Model")[0]
var text = document.getElementsByName("Nowy")[0]
var rodzaj = document.getElementsByName("Rodzaj")

var m_models = { "Ford": ["Fiesta", "Focus"], "Fiat": ["126p", "punto"] }

document.addEventListener("DOMContentLoaded", function () {
    for (let key in m_models) {
        marka.appendChild(get_new_option(key))
    }
    marka.selected = "Ford"

    update_DOM("Ford")
});

function get_new_option(value) {
    var new_m = document.createElement("option")
    new_m.innerHTML = value
    new_m.value = value

    return new_m
}

document.getElementsByName("Dodaj")[0].onclick = function () {
    if (text.value != "") {
        var chckd_elem
        rodzaj.forEach(element => {
            if (element.checked) {
                chckd_elem = element
            }
        });

        if (chckd_elem.value == "marka") {
            if (!(text.value in m_models)) {
                m_models[text.value] = []
                marka.appendChild(get_new_option(text.value))
            }
        } else {
            m_models[marka.value].push(text.value)
        }
        update_DOM(marka.value)
    }
    return false
}

marka.onchange = function () {
    update_DOM(marka.value)
}

function update_DOM(marka) {
    while (model.firstChild) {
        model.removeChild(model.firstChild);
    }

    m_models[marka].forEach(m => {
        model.appendChild(get_new_option(m))
    });
}
