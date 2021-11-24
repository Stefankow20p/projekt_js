const radios = document.querySelector("main").querySelector("section:nth-child(1)").querySelectorAll("input");
const lis = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li");
// 0-4 h2, 5-9 img, 10-14 descriptions
function change_display(idik) {
    for (i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }
    switch (idik) {
        case "parking":
            lis[0].style.display = "block";
            lis[5].style.display = "block";
            lis[10].style.display = "block";
            break;
        case "stolowka":
            lis[1].style.display = "block";
            lis[6].style.display = "block";
            lis[11].style.display = "block";
            break;
        case "pralnia":
            lis[2].style.display = "block";
            lis[7].style.display = "block";
            lis[12].style.display = "block";
            break;
        case "lodziarnia":
            lis[3].style.display = "block";
            lis[8].style.display = "block";
            lis[13].style.display = "block";
            break;
        case "pomost":
            lis[4].style.display = "block";
            lis[9].style.display = "block";
            lis[14].style.display = "block";
            break;
        default:
            console.log("blad przy zmianie zawartosci section 2");
    }
}
for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
        change_display(this.id);
    });
}
change_display("parking");
