const mysql = require('mysql')
let connection_base = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "baza_osrodek",
});





function check_if (data1 , data2, pokoj){
    let czyWolne = false;
    const zapytanie = "SELECT * FROM wynajecia WHERE ((${data1} BETWEEN przyjazd AND dzien_przed_wyjazdem) OR (${data2} BETWEEN przyjazd AND dzien_przed_wyjazdem) OR (${data1}< przyjazd AND ${data2}>dzien_przed_wyjazdem)) AND pokoj == ${pokoj}"

    connection_base.connect(function (err) {
        if (err) throw err;
        connection_base.query(zapytanie, function (err, result) {
            if (err) throw err;
            console.log(result);
            if(typeof(result[0]) === undefined){
                console.log("miejsce wolne")
                czyWolne = true
            }
        });
    });

    
    return czyWolne;
}



connection_base.end()

module.exports = check_if