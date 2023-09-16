import {lockScroll, unlockScroll} from "shelter/jsSrc/utils";

const modal = document.getElementById('pets__carousel-modal');
const modalsBody = document.getElementsByClassName('pets__modal-body');
const openBtns = document.getElementsByClassName('pets__card-btn');
const closeBtns = document.getElementsByClassName('pets__close-modal');
let isOpen = false;
const modalOpenClass = 'pets__carousel-modal_open';
const modalBodyOpenClass = 'pets__modal-body_open';

export function init() {
    for (let i = 0; i < openBtns.length; i++) {
        openBtns[i].addEventListener('click', () =>{
            isOpen || openModal(modalsBody[i]);
        })
        closeBtns[i].addEventListener('click', () => {
            !isOpen || closeModal(modalsBody[i]);
        })
        modal.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(modalsBody[i]);
            withinBoundaries || closeModal(modalsBody[i]);
        })
    }
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