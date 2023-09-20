import {getCardById, getCardsCount} from "shelter/jsSrc/petCardGetter";
import {breakpoints, currentBreakpoint} from "shelter/jsSrc/breakpoints";
import {getRandomInt, shuffleArray} from "shelter/jsSrc/utils";
const navBtns = {
    right: document.getElementsByClassName('pets__carousel-btn_right'),
    left: document.getElementsByClassName('pets__carousel-btn_left')
}
const cardsContainer = document.getElementById('pets__cards-container')
let cards = [];
let currentIndex = 0;
let currentVisibeCards = 0;
let cardWidth = 0;
let maxIndex = 0;
const cardMarginLeft = 40;
const visibleCards = {
    sm: 0,
    md: 0,
    lg: 0,
}

export function init(
    countCardsSm,
    countCardsMd,
    countCardsLg
) {
    visibleCards.sm = countCardsSm;
    visibleCards.md = countCardsMd;
    visibleCards.lg = countCardsLg;
    for (let i = 0; i < getCardsCount(); i++) {
        pushCardToCards(i);
    }
    updateMaxIndex();
    cards = shuffleArray(cards);
    updateCardsOnPage();
    cardWidth = cards[0].offsetWidth + cardMarginLeft;


    bpChange(currentBreakpoint.current);
    window.addEventListener('breakpointChange', onBpChange);


    for (let i = 0; i < navBtns.right.length; i++) {
        navBtns.right[i].addEventListener('click', () => {
            navBtns.right[i].disabled ||  scrollRight();
        })
    }
    for (let i = 0; i < navBtns.left.length; i++) {
        navBtns.left[i].addEventListener('click', () => {
            navBtns.left[i].disabled || scrollLeft();
        })
    }
    updateBtnsState();
}
function pushCardToCards(cardId) {
    const {card} = getCardById(cardId);
    cards.push(card);
}
function scrollRight() {
    currentIndex++;
    updateCardsPosition();
    updateBtnsState();
}
function scrollLeft() {
    currentIndex--;
    updateCardsPosition();
    updateBtnsState();
}
function updateCardsPosition() {
    const translateX = -currentIndex * cardWidth * currentVisibeCards;
    cards.forEach((card) => {
        card.style.transform = `translateX(${translateX}px)`
    })
}
function onBpChange(e) {
    bpChange(e.detail);
}

function bpChange(breakpoint) {
    switch (breakpoint) {
        case breakpoints.sm: {
            currentVisibeCards = visibleCards.sm;
            break;
        }
        case breakpoints.md: {
            currentVisibeCards = visibleCards.md;
            break;
        }
        case breakpoints.lg: {
            currentVisibeCards = visibleCards.lg;
            break;
        }
        default:
            throw new Error(`undefined breakpoint value: ${breakpoint}`);
    }
    updateMaxIndex();
    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    updateCardsPosition();
    updateBtnsState();
}

//turning off/on buttons depending on scrolling
function updateBtnsState() {
    if (currentIndex <= 0) {
        for (let i = 0; i < navBtns.left.length; i++) {
            navBtns.left[i].disabled = true
        }
    }
    if (currentIndex === 1) {
        for (let i = 0; i < navBtns.left.length; i++) {
            navBtns.left[i].disabled = false;
        }
    }
    if (currentIndex*currentVisibeCards + currentVisibeCards >= cards.length) {
        for (let i = 0; i < navBtns.right.length; i++) {
            navBtns.right[i].disabled = true;
        }
    }
    if (currentIndex*currentVisibeCards + currentVisibeCards < cards.length) {
        for (let i = 0; i < navBtns.right.length; i++) {
            navBtns.right[i].disabled = false;
        }
    }
}
function updateCardsOnPage() {
    cardsContainer.innerHTML = ''
    cards.forEach((card) => {
        cardsContainer.appendChild(card);
    })
}

function updateMaxIndex() {
    maxIndex = Math.ceil(cards.length / currentVisibeCards)-1;
}