const radios = document.querySelector("main").querySelector("section:nth-child(1)").querySelectorAll("input");

for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
        const inp = document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="text"]');
        inp.value = 3;
    });
}
