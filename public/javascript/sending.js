function send() {
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
    document.location = "zaplacono.html";
}
