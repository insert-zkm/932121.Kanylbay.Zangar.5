var modalLinkSelectorName = ".modal-link";
var modalSelectorsName = ".modal";

var links = document.querySelectorAll(modalLinkSelectorName);
var modals = document.querySelectorAll(modalSelectorsName);

/**
 * @param {HTMLElement} modalLink
 * @param {HTMLElement} modal
 */
function openModalListener(modalLink, modal) {
    modalLink.addEventListener("click", () => {
        modal.classList.toggle("open");
    });
}


(links) && links.forEach((link) => {
    if(!link.dataset?.modalId) {
        console.warn("Modal link must have data-modal-id attribute", link);
        return;
    }
    var modal = document.getElementById(link.dataset.modalId);
    if(!modal) {
        console.warn(`In the document no element with id: ${link.dataset.modalId}`);
        return;
    }
    if(!modal.classList.contains("modal")) {
        console.warn(`Selected #${link.dataset.modalId} element is not modal element`);
        return;
    }
    openModalListener(link, modal);
});

(modals) && modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        if(!e.target.closest(".modal_body")) {
            modal.classList.remove("open");
        }
    })
})