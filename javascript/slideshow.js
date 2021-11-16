class Zdjecia {
    constructor(path, src = [], alt = []) {
        this.path = path;
        this.src = src;
        this.alt = alt;
        this.num = this.src.length;
        this.currentSlide = 0;
        this.interval = 0;
        // this.turn_on();
    }
    log_src() {
        for (i = 0; i < this.num; i++) {
            console.log(this.src[i]);
        }
    }
    log_alt() {
        for (i = 0; i < this.num; i++) {
            console.log(this.alt[i]);
        }
    }
    log_object() {
        console.log(this.path);
        console.log(this.num);
        this.log_src();
        this.log_alt();
    }
    change_slide() {
        console.log(this);
        this.path.firstChild.src = this.src[this.currentSlide];
        //changes slide
        this.currentSlide += 1;
        if (this.currentSlide == this.num) {
            this.currentSlide = 0;
        }
        //if last slide goes to first
        if (this.path.style.display == "none") {
            clearInterval(this.interval);
            this.interval = 0;
        }
    }
    turn_on() {
        this.change_slide();
        if (this.path.style.display == "block") {
            let temp = this;
            this.interval = setInterval(function () {
                temp.change_slide();
            }, 2000);
        } else {
            clearInterval(this.interval);
            this.interval = 0;
        }
    }
}
if (document.title == "Mapa") {
    const stolowka = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[6],
        ["img/mapa/stolowka/z1.jpg", "img/mapa/stolowka/z2.jpg", "img/mapa/stolowka/z3.jpg"],
        ["zdjęcie przedstawiające stołówkę", "zdjęcie przedstawiające bochenek chleba", "zdjęcie przedstawiające kiełbasę"]
    );
    const pomost = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[9],
        ["img/mapa/pomost/z1.jpg", "img/mapa/pomost/z2.jpg"],
        ["zdjęcie przedstawiające pomost", "zdjęcie przedstawiające kajak"]
    );
    document.querySelector("#stolowka").addEventListener("change", function () {
        stolowka.turn_on();
    });
    document.querySelector("#pomost").addEventListener("change", function () {
        pomost.turn_on();
    });
    //5-9
} else {
    const lis = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li");

    const g1 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[0],
        [
            "img/rezerwacjazdjecia/g1/zdj1.jpg",
            "img/rezerwacjazdjecia/g1/zdj2.jpg",
            "img/rezerwacjazdjecia/g1/zdj3.jpg",
            "img/rezerwacjazdjecia/g1/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    //0-15
}
