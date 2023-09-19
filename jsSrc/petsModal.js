import {lockScroll, unlockScroll} from "shelter/jsSrc/utils";

let modalContainer = document.getElementById('pets__carousel-modals-container');
const modalsBody = document.getElementsByClassName('pets__modal-body');
let isOpen = false;
const modalOpenClass = 'pets__carousel-modal_open';
const modalBodyOpenClass = 'pets__modal-body_open';

export function init() {
    const container = document.createElement('div');
    container.id = "pets__carousel-modals-container";
    document.body.appendChild(container);
    modalContainer = container;
}
export function attachModal(modal, modalBody, openBtn, closeBtn) {
    modalContainer.appendChild(modal);
    openBtn.addEventListener('click', () =>{
        isOpen || openModal(modal, modalBody);
    })
    closeBtn.addEventListener('click', () => {
        !isOpen || closeModal(modal, modalBody);
    })
    modal.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(modalBody);
        if (!withinBoundaries) {
            closeModal(modal,modalBody);
        }
    })
}

function openModal(modal, modalBody) {
    isOpen = true;
    modal.classList.add(modalOpenClass);
    modalBody.classList.add(modalBodyOpenClass);
    lockScroll();
}
function closeModal(modal, modalBody) {
    isOpen = false;
    modal.classList.remove(modalOpenClass);
    modalBody.classList.remove(modalBodyOpenClass);
    unlockScroll();
}