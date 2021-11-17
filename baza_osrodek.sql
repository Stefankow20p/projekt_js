DROP DATABASE if EXISTS baza_osrodek;

CREATE DATABASE baza_osrodek;

use baza_osrodek;

CREATE TABLE pokoje(
		id_pokoj int,
		ilosc_osob int,
		PRIMARY KEY (id_pokoj)
		);

CREATE TABLE znizki (
		id_znizka int AUTO_INCREMENT,
		dzien date,
		wartosc float,
		PRIMARY KEY (id_znizka)
		);
		
CREATE TABLE wynajecia(
		id_wynajecia int AUTO_INCREMENT,
		przyjazd date,
        dzien_przed_wyjazdem date,
        pokoj int,
        internet bool,
        sprzatanie bool,
        pralnia bool,
        sniadanie bool,
        obiadokolacja bool,
        laczny_koszt float,
		PRIMARY KEY (id_wynajecia)
		);








INSERT INTO pokoje values (1,"4");
INSERT INTO pokoje values (2,"2");
INSERT INTO pokoje values (3,"6");
INSERT INTO pokoje values (4,"4");
INSERT INTO pokoje values (5,"4");
INSERT INTO pokoje values (6,"2");
INSERT INTO pokoje values (7,"5");
INSERT INTO pokoje values (8,"8");
INSERT INTO pokoje values (9,"8");
INSERT INTO pokoje values (10,"2");
INSERT INTO pokoje values (11,"2");
INSERT INTO pokoje values (12,"2");
INSERT INTO pokoje values (13,"2");
INSERT INTO pokoje values (14,"2");
INSERT INTO pokoje values (15,"2");
INSERT INTO pokoje values (16,"2");

INSERT INTO znizki(dzien, wartosc) values ("2021-10-16",0.6);
INSERT INTO znizki(dzien, wartosc) values ("2021-10-17",0.6);
INSERT INTO znizki(dzien, wartosc) values ("2021-10-02",0.7);
INSERT INTO znizki(dzien, wartosc) values ("2021-10-03",0.7);
INSERT INTO znizki(dzien, wartosc) values ("2021-10-09",0.7);
INSERT INTO znizki(dzien, wartosc) values ("2021-10-10",0.7);