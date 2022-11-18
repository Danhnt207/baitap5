function C112money(quantity) {
    document.getElementById("Cmoney").value = quantity * 10 + "$";
    if (isNaN(quantity) == true) {
        alert("Nhập một số nguyên");
    }
}

function B124money(quantity) {
    document.getElementById("Bmoney").value = quantity * 20 + "$";
    if (isNaN(quantity) == true) {
        alert("Nhập một số nguyên");
    }
}

function U125money(quantity) {
    document.getElementById("Umoney").value = quantity * 15 + "$";
    if (isNaN(quantity) == true) {
        alert("Vui lòng nhập số nguyên");
    }
}

function Total(a, b, c) {
    document.getElementById("total").value = parseInt(a.slice(0, -1)) + parseInt(b.slice(0, -1)) + parseInt(c.slice(0, -1)) + "$";
}