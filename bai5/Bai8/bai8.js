function openNav(evt, navName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(navName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function cssLeave() {
    document.getElementById("css").classList.remove(openNav());
  }

  function jsLeave() {
    document.getElementById("javascript").classList.remove(openNav());
  }
  