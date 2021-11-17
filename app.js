const mysql = require("mysql");
let connection_base = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "baza_osrodek",
});

connection_base.connect(function (err) {
    if (err) throw err;
    connection_base.query("SELECT * FROM pokoje", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
connection_base.end();
