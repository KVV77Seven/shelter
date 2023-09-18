import {lockScroll, unlockScroll} from "shelter/jsSrc/utils";

const modal = document.getElementById('pets__carousel-modal');
const modalsBody = document.getElementsByClassName('pets__modal-body');
let isOpen = false;
const modalOpenClass = 'pets__carousel-modal_open';
const modalBodyOpenClass = 'pets__modal-body_open';

export function attachModal(modalBody, openBtn, closeBtn) {
    modal.appendChild(modalBody);
    openBtn.addEventListener('click', () =>{
        isOpen || openModal(modalBody);
    })
    closeBtn.addEventListener('click', () => {
        !isOpen || closeModal(modalBody);
    })
    modal.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(modalBody);
        withinBoundaries || closeModal(modalBody);
    })
}

function openModal(modalBody) {
    isOpen = true;
    modal.classList.add(modalOpenClass);
    modalBody.classList.add(modalBodyOpenClass);
    lockScroll();
}
function closeModal(modalBody) {
    isOpen = false;
    modal.classList.remove(modalOpenClass);
    modalBody.classList.remove(modalBodyOpenClass);
    unlockScroll();
}