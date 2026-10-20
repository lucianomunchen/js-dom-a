
import { watches } from "./data.js";

const list = document.querySelector("#list");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const loading = document.querySelector("#loading");

function createCard(watch) {
    const card = document.createElement("article");
    card.className = "rounded-lg bg-white p-4 shadow-sm";

    const image = document.createElement("img");
    image.src = watch.image;
    image.alt = watch.name;
    image.className = "mb-3 w-full rounded";

    const name = document.createElement("h2");
    name.className = "font-semibold text-emerald-900";
    name.textContent = watch.name;

    const category = document.createElement("p");
    category.className = "text-sm text-gray-500";
    category.textContent = watch.category;

    const price = document.createElement("p");
    price.className = "my-2 font-semibold";
    price.textContent = watch.price + " €";

    const link = document.createElement("a");
    link.href = watch.url;
    link.textContent = "Više o modelu";
    link.className = "text-emerald-800 underline";
    link.target = "_blank";

    card.append(image, name, category, price, link);

    return card;
}

function render(items) {
    list.innerHTML = "";

    for (const item of items) {
        list.appendChild(createCard(item));
    }

    count.textContent = "Prikazano satova: " + items.length;

    empty.classList.toggle("hidden", items.length > 0);
}

const sortedWatches = [...watches].sort((a, b) =>
    a.name.localeCompare(b.name)
);

render(sortedWatches);

loading.remove();
