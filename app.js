console.log("server runs");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; //3306
//serv remotemysql.com
const mysql = require("mysql");
let pool_base = mysql.createPool({
    host: "remotemysql.com",
    user: "JaHhY3RSru",
    password: "oAhskDzOzB",
    database: "JaHhY3RSru",
});
let connection_base = mysql.createConnection({
    host: "remotemysql.com",
    user: "JaHhY3RSru",
    password: "oAhskDzOzB",
    database: "JaHhY3RSru",
});
connection_base.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
});
const async = require("async");

app.listen(port, () => console.log(`listening at port ${port}`));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const liczba_os = [4, 2, 6, 4, 4, 2, 5, 8, 8, 2, 2, 2, 2, 2, 2, 2];
const ceny = [170, 100, 300, 200, 190, 120, 300, 350, 350, 50, 50, 70, 70, 100, 150, 120];
function substract_one_day(data) {
    data = new Date(data);
    data.setDate(data.getDate() - 1);
    console.log("zwracam dobra date " + (data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate()));
    return data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate();
}
async function check_if_empty(data1, data2, pokoj) {
    data2 = substract_one_day(data2);
    const zapytanie = `SELECT * FROM wynajecia WHERE (("${data1}" BETWEEN przyjazd AND dzien_przed_wyjazdem) OR ("${data2}" BETWEEN przyjazd AND dzien_przed_wyjazdem) OR ("${data1}" < przyjazd AND "${data2}" >dzien_przed_wyjazdem)) AND pokoj = ${pokoj}`;
    get_data = () => {
        return new Promise((resolve, reject) => {
            pool_base.query(zapytanie, (error, result) => {
                if (error) {
                    return reject(error);
                }
                console.log(result);
                if (result[0] == undefined) {
                    console.log("miejsce wolne");
                    result = true;
                } else {
                    console.log("nie miejsce wolne");
                    result = false;
                }
                return resolve(result);
            });
        });
    };
    console.log("cos");
    let cos = await get_data();
    console.log(cos);
    console.log("koniec check if");
    return cos;
}

app.post("/api/check", async (req, res) => {
    console.log("------------");
    console.log("I got a check request");
    console.log(req.body);
    let results = await check_if_empty(req.body.data1, req.body.data2, req.body.number);
    res.json({ is_empty: results });
    console.log("------------");
});

async function check_if_znizka(zapytanie) {
    get_data = () => {
        return new Promise((resolve, reject) => {
            pool_base.query(zapytanie, (error, result) => {
                if (error) {
                    return reject(error);
                }
                if (result[0] == undefined) {
                    result = false;
                }
                return resolve(result);
            });
        });
    };
    let znizki = await get_data();
    return znizki;
}

app.post("/", async function (req, res) {
    console.log("------------");
    console.log("I got a reservation request");
    console.log(req.body);

    let odjazd = substract_one_day(req.body.data.odjazd);
    const zapytanie = `SELECT wartosc FROM znizki WHERE (dzien BETWEEN "${req.body.data.przyjazd}" AND "${odjazd}") AND (znizki.ilosc_osob = 0 OR znizki.ilosc_osob = (SELECT pokoje.ilosc_osob FROM pokoje WHERE id_pokoj = ${req.body.data.nr_domu}))`;
    const znizka = await check_if_znizka(zapytanie);
    let znizka_suma = 0;
    if (znizka != false) {
        znizka.forEach((element) => {
            znizka_suma += element.wartosc * ceny[req.body.data.nr_domu - 1];
        });
    }

    let cena = 0;
    let date1 = new Date(req.body.data.przyjazd);
    let date2 = new Date(req.body.data.odjazd);
    const ilosc_dni = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    console.log(ilosc_dni);
    let mnoznik = 0;
    if (req.body.data.internet) {
        mnoznik += 20;
    }
    if (req.body.data.sprzatanie) {
        mnoznik += 50;
    }
    if (req.body.data.pralnia) {
        mnoznik += 10;
    }
    if (req.body.data.sniadanie) {
        mnoznik += 15 * liczba_os[req.body.data.nr_domu - 1];
    }
    if (req.body.data.obiadokolacja) {
        mnoznik += 25 * liczba_os[req.body.data.nr_domu - 1];
    }
    cena = mnoznik * ilosc_dni + ceny[req.body.data.nr_domu - 1] * ilosc_dni;
    cena -= znizka_suma;
    console.log("cena = " + cena);
    console.log(znizka_suma);
    console.log(znizka);
    const zapytanie2 = `INSERT INTO wynajecia(przyjazd, dzien_przed_wyjazdem, pokoj, internet, sprzatanie, pralnia, sniadanie, obiadokolacja, laczny_koszt) values ("${
        req.body.data.przyjazd
    }","${odjazd}",${req.body.data.nr_domu},${req.body.data.internet.toString().toUpperCase()},${req.body.data.sprzatanie
        .toString()
        .toUpperCase()},${req.body.data.pralnia.toString().toUpperCase()},${req.body.data.sniadanie
        .toString()
        .toUpperCase()},${req.body.data.obiadokolacja.toString().toUpperCase()},${cena})`;
    connection_base.query(zapytanie2, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.end();
    console.log("------------");
});

async function get_znizka(data1, data2, nr_domu) {
    data2 = substract_one_day(data2);
    const zapytanie = `SELECT wartosc FROM znizki WHERE (dzien BETWEEN "${data1}" AND "${data2}") AND (znizki.ilosc_osob = 0 OR znizki.ilosc_osob = (SELECT pokoje.ilosc_osob FROM pokoje WHERE id_pokoj = ${nr_domu}))`;
    get_data = () => {
        return new Promise((resolve, reject) => {
            pool_base.query(zapytanie, (error, result) => {
                if (error) {
                    return reject(error);
                }
                if (result[0] == undefined) {
                    result = false;
                }
                return resolve(result);
            });
        });
    };
    let znizki = await get_data();
    return znizki;
}

app.post("/api/znizka", async (req, res) => {
    console.log("------------");
    console.log("I got a discount request");
    console.log(req.body);
    let znizka = await get_znizka(req.body.data1, req.body.data2, req.body.number);
    console.log(znizka);
    let znizka_suma = 0;
    if (znizka != false) {
        znizka.forEach((element) => {
            znizka_suma += element.wartosc * ceny[req.body.number - 1];
        });
    }

    res.json({ znizka: znizka_suma });
    console.log("------------");
});
