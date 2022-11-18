function Apply(r1, g1, b1, r2, g2, b2) {
    var bgcol = "#" + r1 + g1 + b1;
    textcolor = "#" + r2 + g2 + b2;
    document.getElementById("background-color").style.backgroundColor = bgcol;
    document.getElementById("text-color").style.color = textcolor;

}
function Reload() {
    document.getElementById('background-color').style.background = "#fff";
    document.getElementById('text-color').style.color = "#000";
    document.getElementById('red1').value = "";
    document.getElementById('green1').value = "";
    document.getElementById('blue1').value = "";
    document.getElementById('red2').value = "";
    document.getElementById('green2').value = "";
    document.getElementById('blue2').value = "";
}