import {lockScroll, unlockScroll} from "shelter/jsSrc/utils";

const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-menu')
const burgerBody = document.getElementById('burger-menu-body');
let isOpen = false
const burgerOpenClass = 'header__burger_open'
const burgerMenuOpenClass = 'header__menu-bg_open'
export function burgerInit() {
    burger.addEventListener('click', () => {
        if (isOpen) {
            console.log('test')
            closeMenu();
            return;
        }
        openMenu();
    })
    burgerMenu.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(burgerBody);
        if (!withinBoundaries) {
            closeMenu();
        }
    })
    function closeMenu() {
        burgerMenu.classList.remove(burgerMenuOpenClass);
        burger.classList.remove(burgerOpenClass);
        isOpen = false;
        unlockScroll();
    }
    function openMenu() {
        burgerMenu.classList.add(burgerMenuOpenClass);
        burger.classList.add(burgerOpenClass);
        isOpen = true;
        lockScroll();
    }
}