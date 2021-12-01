function send() {
    const p_komunikat = document.querySelectorAll("p")[document.querySelectorAll("p").length - 1]; // komunikat bledu
    const subm = document.querySelectorAll("input")[document.querySelectorAll("input").length - 1]; //przycisk submit
    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: {
                przyjazd: document.querySelector('input[name="przyjazd"]').value,
                odjazd: document.querySelector('input[name="odjazd"]').value,
                nr_domu: document.querySelector('input[name="nr_domu"]').value,
                internet: document.querySelector('input[name="internet"]').checked,
                sprzatanie: document.querySelector('input[name="sprzatanie"]').checked,
                pralnia: document.querySelector('input[name="pralnia"]').checked,
                sniadanie: document.querySelector('input[name="sniadanie"]').checked,
                obiadokolacja: document.querySelector('input[name="obiadokolacja"]').checked,
            },
        }),
    });
    subm.removeEventListener("click", send);
    p_komunikat.innerHTML = "Nie można dokonać tej samej rezerwacji dwukrotnie.";
    document.location = "zaplacono.html";
}
