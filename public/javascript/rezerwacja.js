async function czy_wolne() {
    //sprawdza czy daty sa przyszle, czy przyjazd jest wczesniej niz wyjazd, jak ok to wysyla zapytanie na serv czy domek jest wtedy wolny
    const dates = document.querySelectorAll('input[type="date"]');
    const subm = document.querySelectorAll("input")[document.querySelectorAll("input").length - 1]; //przycisk submit
    const p_komunikat = document.querySelectorAll("p")[document.querySelectorAll("p").length - 1]; // komunikat bledu
    if (dates[0].value <= new Date()) {
        subm.removeEventListener("click", send);
        p_komunikat.innerHTML = "Nieprawidłowy zakres dat.";
    } else if (dates[0].value >= dates[1].value) {
        subm.removeEventListener("click", send);
        p_komunikat.innerHTML = "Nieprawidłowy zakres dat.";
    } else {
        let empty = false;
        let data1 = document.querySelector("main").querySelectorAll('input[type="date"]')[0].value;
        let data2 = document.querySelector("main").querySelectorAll('input[type="date"]')[1].value;
        let number = document.querySelector("main").querySelector('input[type="hidden"]').value;
        const data = { data1, data2, number };
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch("api/check", options);
        const results = await res.json();
        empty = results.is_empty;
        if (empty == false) {
            subm.removeEventListener("click", send);
            p_komunikat.innerHTML = "Domek jest w tym momencie zajęty.";
        } else {
            subm.addEventListener("click", send);
            p_komunikat.innerHTML = "";
        }
    }
}
czy_wolne();
document.querySelectorAll('input[type="date"]')[0].addEventListener("change", czy_wolne);
document.querySelectorAll('input[type="date"]')[1].addEventListener("change", czy_wolne);
for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", czy_wolne);
}
