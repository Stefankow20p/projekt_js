const radios = document.querySelector("main").querySelector("section:nth-child(1)").querySelectorAll("input");
const lis = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li");
const udogodnienia = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll('input[type="checkbox"]');
const liczba_os = [4, 2, 6, 4, 4, 2, 5, 8, 8, 2, 2, 2, 2, 2, 2, 2];
const ceny = [170, 100, 300, 200, 190, 120, 300, 350, 350, 50, 50, 70, 70, 100, 150, 120];

async function wypisz_koszt(nr_pokoju) {
    //ustala ilosc dni
    nr_pokoju = nr_pokoju - 1;
    let date1 = new Date(document.querySelectorAll('input[type="date"]')[0].value);
    let date2 = new Date(document.querySelectorAll('input[type="date"]')[1].value);
    const ilosc_dni = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    // sprawdza dodatkowe udogodnienia
    let mnoznik = 0;
    if (udogodnienia[0].checked) {
        mnoznik += 20;
    }
    if (udogodnienia[1].checked) {
        mnoznik += 50;
    }
    if (udogodnienia[2].checked) {
        mnoznik += 10;
    }
    if (udogodnienia[3].checked) {
        mnoznik += 15 * liczba_os[nr_pokoju];
    }
    if (udogodnienia[4].checked) {
        mnoznik += 25 * liczba_os[nr_pokoju];
    }
    let znizka = 0;
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
    const res = await fetch("api/znizka", options);
    const results = await res.json();
    if (results.znizka > 0) {
        znizka = results.znizka;
    }
    if (znizka == 0) {
        document.querySelector("main").querySelector("form").querySelectorAll("li")[1].innerHTML = mnoznik * ilosc_dni + ceny[nr_pokoju] * ilosc_dni;
    } else {
        document.querySelector("main").querySelector("form").querySelectorAll("li")[1].innerHTML =
            "<s>" + (mnoznik * ilosc_dni + ceny[nr_pokoju] * ilosc_dni) + "</s>  " + (mnoznik * ilosc_dni + ceny[nr_pokoju] * ilosc_dni - znizka);
    }
}

function change_value(item) {
    const inp = document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="hidden"]');
    inp.value = item.slice(3, 5);
    document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("ul")[1].querySelectorAll("li")[1].innerHTML =
        ceny[item.slice(3, 5) - 1];
    document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("ul")[2].querySelectorAll("li")[1].innerHTML =
        liczba_os[item.slice(3, 5) - 1];
    document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[16].innerHTML = "Nr: " + item.slice(3, 5);
    for (i = 0; i < 16; i++) {
        lis[i].style.display = "none";
    }
    lis[parseInt(item.slice(3, 5)) - 1].style.display = "block";
}
for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
        change_value(this.id);
        wypisz_koszt(document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="hidden"]').value);
    });
}

document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="hidden"]').value = 1;
for (i = 0; i < 16; i++) {
    lis[i].style.display = "none";
}
lis[0].style.display = "block";
lis[16].innerHTML = "Nr: 1";

document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("ul")[1].querySelectorAll("li")[1].innerHTML = "170";
document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("ul")[2].querySelectorAll("li")[1].innerHTML = "4";

for (i = 0; i < udogodnienia.length; i++) {
    udogodnienia[i].addEventListener("change", function () {
        wypisz_koszt(document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="hidden"]').value);
    });
}
document.querySelectorAll('input[type="date"]')[0].addEventListener("change", function () {
    wypisz_koszt(document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="hidden"]').value);
});
document.querySelectorAll('input[type="date"]')[1].addEventListener("change", function () {
    wypisz_koszt(document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="hidden"]').value);
});
