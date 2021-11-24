console.log("server runs");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mysql = require("mysql");
let pool_base = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "baza_osrodek",
});

const async = require("async");

app.listen(port, () => console.log(`listening at port ${port}`));
app.use(express.static("public"));
app.use(express.json());
function substract_one_day(data) {
    data = new Date(data);
    data.setDate(data.getDate() - 1);
    console.log("zwracam dobra date");
    return data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate();
}
async function check_if_empty(data1, data2, pokoj) {
    data2 = substract_one_day(data2);
    const zapytanie = `SELECT * FROM wynajecia WHERE ((${data1} BETWEEN przyjazd AND dzien_przed_wyjazdem) OR (${data2} BETWEEN przyjazd AND dzien_przed_wyjazdem) OR (${data1}< przyjazd AND ${data2}>dzien_przed_wyjazdem)) AND pokoj = ${pokoj}`;
    console.log("pyk");

    SelectAllElements = () => {
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
                    console.log(" nie miejsce wolne");
                    result = false;
                }
                return resolve(result);
            });
        });
    };
    console.log("cos");
    let cos = await SelectAllElements();
    console.log(cos);
    console.log("koniec check if");
    return cos;
}

app.post("/api/check", async (req, res) => {
    console.log("I got a request");
    console.log(req.body);
    let results = await check_if_empty(req.body.data1, req.body.data2, req.body.number);
    res.json({ is_empty: results });
});
