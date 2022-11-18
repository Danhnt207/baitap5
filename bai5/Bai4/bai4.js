function inputData() {
    document.getElementById("input").value = " ";
    document.getElementById("output").innerHTML = " ";
}
function upperCase(str) {
    document.getElementById("output").innerHTML = str.toUpperCase();
}
function lowerCase(str) {
    document.getElementById("output").innerHTML = str.toLowerCase();
}
function countUpperCase(str) {
    var arr = str.split("");
    var uppercase = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 'A' && arr[i] <='Z')
        {uppercase++;}
    }
    document.getElementById("output").innerHTML = uppercase;
}
function wordCount(str) {
    str = str.trim();
    while (str.indexOf("  ") != -1) {
        str = str.replace("  ", " ");
    }
    var arr = str.split(" ");
    document.getElementById("output").innerHTML = arr.length;
}
function countLowerCase(str) {
    var arr = str.split("");
    var lowercase = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 'a' && arr[i] <='z') {
            lowercase++;
        }
    }
    document.getElementById("output").innerHTML = lowercase;
}
function writeLine(str) {
    str = str.trim();
    while (str.indexOf("  ") != -1) {
        str = str.replace("  ", " ");
    }
    while (str.indexOf(" ") != -1) {
        str = str.replace(" ", "\n");
    }
    document.getElementById("output").innerHTML = str;
}
function vowel_Consonant(str) {
    const vowel = ["a", "e", "i", "o", "u"];
    const consonant = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
    var arr = str.split("");
    var vCount = [],
        cCount = [];
        notboth = [];
    for (let i = 0; i < arr.length; i++) {
        if (vowel.indexOf(arr[i].toLowerCase()) != -1) {
            vCount += arr[i] + " ";
        } else if(consonant.indexOf(arr[i].toLowerCase()) != -1 ) { 
            cCount += arr[i] + " ";
        }
        else {
            if(arr[i] != " ") {
                notboth += arr[i] + " ";
            }
        }
       
    }
    document.getElementById("output").innerHTML = "Nguyên âm: " + vCount + "\nPhụ âm: " + cCount +"\nKý tự khác: " + notboth;
}
function viewWebsite() {
    window.location = "https://www.w3schools.com/";
}