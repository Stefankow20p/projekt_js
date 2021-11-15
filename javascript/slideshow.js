if (document.title == "Mapa") {
    const parking = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[5];
    const stolowka = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[6];
    const pralnia = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[7];
    const lodziarnia = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[8];
    const pomost = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[9];
    //5-9
    const strona = "mapa";
} else {
    const strona = "rez";
    const lis = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li");
    //0-16
}
