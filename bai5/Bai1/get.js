function getUrlParams2() {
     const params = new URLSearchParams(window.location.search);
     return params;
 }
 var name = getUrlParams2().get("name");
 var email = getUrlParams2().get("email");
 var gender = getUrlParams2().get("gender");
 var job = getUrlParams2().get("job");
 var region = getUrlParams2().get("region");
 var content = getUrlParams2().get("content");
        document.getElementById("name").innerText = name;
        document.getElementById("email").innerText = email;
        document.getElementById("gender").innerText = gender == 0 ? "Nam" : "Nữ";
        document.getElementById("job").innerText = job == "on" ? "Tôi đã có nghề nghiệp ổn định" : "";
        var reg;
        switch (region) {
            case "north":
                reg = "Miền Bắc";
                break;
            case "mid":
                reg = "Miền Trung";
                break;
            case "south":
                reg = "Miền Nam";
                break;
            case "west":
                reg = "Miền Tây";
                break;
        }
        document.getElementById("region").innerText = reg;
        document.getElementById("content").innerText = content;