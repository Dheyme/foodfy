const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");


for (let card of cards) {
    card.addEventListener("click", function() {
        imageId = card.getAttribute("id");
        /*let descriptionId = card.querySelector('.descri');
        let autorInfoId = card.querySelector('.autor_info');
        idDesc = card.getAttribute("descId");*/

       /* console.log(descriptionId.textContent);
        console.log(autorInfoId.textContent);*/

        modalOverlay.classList.add('active');

        modalOverlay.querySelector("img").src = `assets/${imageId}`;//ok
        /*modalOverlay.querySelector(".descri") = `${descriptionId.textContent}`;
        modalOverlay.querySelector(".autor_info") = `${autorInfoId.textContent}`;
        modalOverlay.querySelector(".descri") = `${idDesc.textContent}`;

        let descriptionIdModal = modalOverlay.querySelector('.descri');
        let autorInfoIdModal = modalOverlay.querySelector('.autor_info');

        descriptionIdModal.textContent = `${descriptionId}`;
        autorInfoIdModal.textContent = `${autorInfoId}`;*/

        

    })
}



document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active');

    modalOverlay.querySelector("img").src = "";//ok
    modalOverlay.querySelector(".descri") = "";
    modalOverlay.querySelector(".autor_info") = "";
})
