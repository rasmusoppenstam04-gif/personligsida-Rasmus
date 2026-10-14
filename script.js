const knapp = document.querySelector("#visa-mer");
const mer = document.querySelector("#mer");

if (knapp && mer) {
    mer.classList.add("gomd");

    function visaMer() {
        mer.classList.toggle("gomd");
        if (mer.classList.contains("gomd")) {
            knapp.textContent = "Visa mer";
            knapp.setAttribute("aria-expanded", "false");
        } else {
            knapp.textContent = "Visa mindre";
            knapp.setAttribute("aria-expanded", "true");
        }
    }

    knapp.addEventListener("click", visaMer);
}

// Bonus: kopiera mailadressen med ett klick
const kopiera = document.querySelector("#kopiera");

if (kopiera) {
    function kopieraMail() {
        navigator.clipboard.writeText("rasopp159@ihmeducation.se");
        kopiera.textContent = "Kopierat!";
    }

    kopiera.addEventListener("click", kopieraMail);
}

// 3 · Växla mellan ljust och mörkt läge
const temaKnapp = document.querySelector("#tema");

if (temaKnapp) {
    function vaxlaTema() {
        document.body.classList.toggle("morkt");
        const arMorkt = document.body.classList.contains("morkt");
        temaKnapp.textContent = arMorkt ? "☀️" : "🌙";
        temaKnapp.setAttribute("aria-label", arMorkt ? "Växla till ljust läge" : "Växla till mörkt läge");
    }

    temaKnapp.addEventListener("click", vaxlaTema);
}