//const check_if_avaible = require("./check_if_avaible.js")

const mysql = require("mysql");
let connection_base = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "baza_osrodek",
});

const http = require("http");

connection_base.end();
