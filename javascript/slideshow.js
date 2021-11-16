class Zdjecia{
    constructor(path, src, alt ,num){
        this.path = path
        this.src = src
        this.alt = alt
        this.num = this.src.length
    }
}
if (document.title == "Mapa") {
    const stolowka = new Zdjecia(document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[6],
    ("img/mapa/stolowka/zdj1.jpg","img/mapa/stolowka/zdj2.jpg","img/mapa/stolowka/zdj3.jpg"),
    ("zdj1","zdj2","zdj3"))
    const pomost = new Zdjecia(document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[9],
    ("img/mapa/pomost/zdj1.jpg","img/mapa/pomost/zdj2.jpg"),
    ("zdj1","zdj2"))
    //5-9
} else {
    const lis = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li");

    const g1 = new Zdjecia(document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[0],
    ("img/rezerwacjazdjecia/g1/zdj1.jpg","img/rezerwacjazdjecia/g1/zdj2.jpg","img/rezerwacjazdjecia/g1/zdj3.jpg"),
    ("zdj1","zdj2","zdj3"))
    //0-15
}
function change_slide() {}
