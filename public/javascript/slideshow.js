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
        //console.log(this);
        this.path.firstChild.src = this.src[this.currentSlide];
        this.path.firstChild.alt = this.alt[this.currentSlide];
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
            }, 3000);
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

    const g0 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[0],
        [
            "img/rezerwacjazdjecia/g0/zdj1.jpg",
            "img/rezerwacjazdjecia/g0/zdj2.jpg",
            "img/rezerwacjazdjecia/g0/zdj3.jpg",
            "img/rezerwacjazdjecia/g0/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g1 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[1],
        [
            "img/rezerwacjazdjecia/g1/zdj1.jpg",
            "img/rezerwacjazdjecia/g1/zdj2.jpg",
            "img/rezerwacjazdjecia/g1/zdj3.jpg",
            "img/rezerwacjazdjecia/g1/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g2 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[2],
        [
            "img/rezerwacjazdjecia/g2/zdj1.jpg",
            "img/rezerwacjazdjecia/g2/zdj2.jpg",
            "img/rezerwacjazdjecia/g2/zdj3.jpg",
            "img/rezerwacjazdjecia/g2/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g3 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[3],
        [
            "img/rezerwacjazdjecia/g3/zdj1.jpg",
            "img/rezerwacjazdjecia/g3/zdj2.jpg",
            "img/rezerwacjazdjecia/g3/zdj3.jpg",
            "img/rezerwacjazdjecia/g3/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g4 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[4],
        [
            "img/rezerwacjazdjecia/g4/zdj1.jpg",
            "img/rezerwacjazdjecia/g4/zdj2.jpg",
            "img/rezerwacjazdjecia/g4/zdj3.jpg",
            "img/rezerwacjazdjecia/g4/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g5 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[5],
        [
            "img/rezerwacjazdjecia/g5/zdj1.jpg",
            "img/rezerwacjazdjecia/g5/zdj2.jpg",
            "img/rezerwacjazdjecia/g5/zdj3.jpg",
            "img/rezerwacjazdjecia/g5/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g6 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[6],
        [
            "img/rezerwacjazdjecia/g6/zdj1.jpg",
            "img/rezerwacjazdjecia/g6/zdj2.jpg",
            "img/rezerwacjazdjecia/g6/zdj3.jpg",
            "img/rezerwacjazdjecia/g6/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g7 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[7],
        [
            "img/rezerwacjazdjecia/g7/zdj1.jpg",
            "img/rezerwacjazdjecia/g7/zdj2.jpg",
            "img/rezerwacjazdjecia/g7/zdj3.jpg",
            "img/rezerwacjazdjecia/g7/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g8 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[8],
        [
            "img/rezerwacjazdjecia/g8/zdj1.jpg",
            "img/rezerwacjazdjecia/g8/zdj2.jpg",
            "img/rezerwacjazdjecia/g8/zdj3.jpg",
            "img/rezerwacjazdjecia/g8/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g9 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[9],
        [
            "img/rezerwacjazdjecia/g9/zdj1.jpg",
            "img/rezerwacjazdjecia/g9/zdj2.jpg",
            "img/rezerwacjazdjecia/g9/zdj3.jpg",
            "img/rezerwacjazdjecia/g9/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g10 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[10],
        [
            "img/rezerwacjazdjecia/g10/zdj1.jpg",
            "img/rezerwacjazdjecia/g10/zdj2.jpg",
            "img/rezerwacjazdjecia/g10/zdj3.jpg",
            "img/rezerwacjazdjecia/g10/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g11 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[11],
        [
            "img/rezerwacjazdjecia/g11/zdj1.jpg",
            "img/rezerwacjazdjecia/g11/zdj2.jpg",
            "img/rezerwacjazdjecia/g11/zdj3.jpg",
            "img/rezerwacjazdjecia/g11/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g12 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[12],
        [
            "img/rezerwacjazdjecia/g12/zdj1.jpg",
            "img/rezerwacjazdjecia/g12/zdj2.jpg",
            "img/rezerwacjazdjecia/g12/zdj3.jpg",
            "img/rezerwacjazdjecia/g12/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g13 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[13],
        [
            "img/rezerwacjazdjecia/g13/zdj1.jpg",
            "img/rezerwacjazdjecia/g13/zdj2.jpg",
            "img/rezerwacjazdjecia/g13/zdj3.jpg",
            "img/rezerwacjazdjecia/g13/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g14 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[14],
        [
            "img/rezerwacjazdjecia/g14/zdj1.jpg",
            "img/rezerwacjazdjecia/g14/zdj2.jpg",
            "img/rezerwacjazdjecia/g14/zdj3.jpg",
            "img/rezerwacjazdjecia/g14/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    const g15 = new Zdjecia(
        document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[15],
        [
            "img/rezerwacjazdjecia/g15/zdj1.jpg",
            "img/rezerwacjazdjecia/g15/zdj2.jpg",
            "img/rezerwacjazdjecia/g15/zdj3.jpg",
            "img/rezerwacjazdjecia/g15/zdj4.jpg",
        ],
        ["zdjęcie przedstawiające domek", "zdjęcie przedstawiające kuchnie", "zdjęcie przedstawiające salon", "zdjęcie przedstawiające sypialnie"]
    );
    document.querySelector("#dom1").addEventListener("change", function () {
        g0.turn_on();
    });
    document.querySelector("#dom2").addEventListener("change", function () {
        g1.turn_on();
    });
    document.querySelector("#dom3").addEventListener("change", function () {
        g2.turn_on();
    });
    document.querySelector("#dom4").addEventListener("change", function () {
        g3.turn_on();
    });
    document.querySelector("#dom5").addEventListener("change", function () {
        g4.turn_on();
    });
    document.querySelector("#dom6").addEventListener("change", function () {
        g5.turn_on();
    });
    document.querySelector("#dom7").addEventListener("change", function () {
        g6.turn_on();
    });
    document.querySelector("#dom8").addEventListener("change", function () {
        g7.turn_on();
    });
    document.querySelector("#dom9").addEventListener("change", function () {
        g8.turn_on();
    });
    document.querySelector("#dom10").addEventListener("change", function () {
        g9.turn_on();
    });
    document.querySelector("#dom11").addEventListener("change", function () {
        g10.turn_on();
    });
    document.querySelector("#dom12").addEventListener("change", function () {
        g11.turn_on();
    });
    document.querySelector("#dom13").addEventListener("change", function () {
        g12.turn_on();
    });
    document.querySelector("#dom14").addEventListener("change", function () {
        g13.turn_on();
    });
    document.querySelector("#dom15").addEventListener("change", function () {
        g14.turn_on();
    });
    document.querySelector("#dom16").addEventListener("change", function () {
        g15.turn_on();
    });
    g0.turn_on();
    //0-15
}
