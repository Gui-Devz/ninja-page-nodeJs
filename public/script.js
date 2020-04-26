const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (const card of cards) {
    card.addEventListener("click", function () {
        const address = card.getAttribute("id");
        window.location.href = `/video/${address}`;
    });
}
