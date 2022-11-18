window.onload = function() {
    var today = new Date();
    var date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    document.getElementById("Today").value = date;
    document.getElementById("FirstName").focus();

}

function APGAR(a, b) {
    if (b < 0 || b > 2) {
        alert("Please enter 0, 1, or 2 in APGAR Score");

    }
    document.getElementById("Total").value = Math.floor(a) + Math.floor(b);
}

function Specify(a) {
    if (a == "") {
        alert("Please enter other physician's name");
    }
}