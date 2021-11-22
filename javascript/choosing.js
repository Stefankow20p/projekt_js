const radios = document.querySelector("main").querySelector("section:nth-child(1)").querySelectorAll("input");
const lis = document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li");
function change_value(item) {
    const inp = document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="hidden"]');
    inp.value = item.slice(3, 5);
    document.querySelector("main").querySelector("section:nth-child(2)").querySelectorAll("li")[16].innerHTML = "Nr: " + item.slice(3, 5);
    for (i = 0; i < 16; i++) {
        lis[i].style.display = "none";
    }
    lis[parseInt(item.slice(3, 5)) - 1].style.display = "block";
}
for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
        change_value(this.id);
    });
}

document.querySelector("main").querySelector("section:nth-child(2)").querySelector('input[type="hidden"]').value = 1;
for (i = 0; i < 16; i++) {
    lis[i].style.display = "none";
}
lis[0].style.display = "block";
lis[16].innerHTML = "Nr: 1";
