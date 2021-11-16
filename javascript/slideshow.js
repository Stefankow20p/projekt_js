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
    const 
    //5-9
} else {
    const lis = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li");
    //0-16
}
function change_slide() {}
