import {breakpoints, currentBreakpoint} from "shelter/jsSrc/breakpoints";
import {getCardById, getCardsCount} from "shelter/jsSrc/petCardGetter";

const container = document.getElementById('pagination__cards-container');

let currentCards = 0;
let currentIndex = 0;
const countCards = {
    sm: 0,
    md: 0,
    lg: 0
}
const paginators = {
    moveLeft: document.getElementById('move-left'),
    jumpLeft: document.getElementById('jump-left'),
    moveRight: document.getElementById('move-right'),
    jumpRight: document.getElementById('jump-right'),
    page: document.getElementById('pagination-page'),
}

export function init(
    countCardsSm,
    countCardsMd,
    countCardsLg,
) {
    countCards.sm = countCardsSm;
    countCards.md = countCardsMd;
    countCards.lg = countCardsLg;
    setCurrentCardsFromBp(currentBreakpoint.current);
    window.addEventListener('breakpointChange', onBpChange);

    paginators.moveLeft.addEventListener('click', moveLeft)
    paginators.moveRight.addEventListener('click', moveRight)
    paginators.jumpLeft.addEventListener('click', jumpLeft)
    paginators.jumpRight.addEventListener('click', jumpRight)

    updateCardsOnPage()
    updateBtnsState()

}

function setCurrentCardsFromBp(breakpoint) {
    switch (breakpoint) {
        case breakpoints.sm: {
            currentCards = countCards.sm;
            break;
        }
        case breakpoints.md: {
            currentCards = countCards.md;
            break;
        }
        case breakpoints.lg: {
            currentCards = countCards.lg;
            break;
        }
        default:
            throw new Error('undefined breakpoint');
    }
}

function updateCardsOnPage() {
    container.innerHTML = '';
    let i = currentIndex === 0 ? 0 : currentIndex*currentCards;
    for (let j = i; j < i+currentCards && j<getCardsCount(); j++) {
        const {card} = getCardById(j);
        container.appendChild(card);
    }
}

function onBpChange(e) {
    setCurrentCardsFromBp(e.detail);
    updateCardsOnPage();
    updateBtnsState();
}

function moveRight() {
    if (paginators.moveRight.disabled) {
        return;
    }
    console.log(paginators.moveRight.disabled)
    currentIndex++
    updateBtnsState()
    updateCardsOnPage()
}
function jumpRight() {
    if (paginators.jumpRight.disabled) {
        return;
    }
    currentIndex = Math.ceil(getCardsCount()/currentCards)-1; 
    updateBtnsState()
    updateCardsOnPage()


}
function moveLeft() {
    if (paginators.moveLeft.disabled) {
        return;
    }
    currentIndex--
    updateCardsOnPage()
    updateBtnsState()
}

function jumpLeft() {
    if (paginators.jumpLeft.disabled) {
        return;
    }
    currentIndex = 0; 
    updateCardsOnPage()
    updateBtnsState()
}
function updateBtnsState() {
    if(currentIndex <= 0) {
        paginators.moveLeft.disabled = true;
        paginators.jumpLeft.disabled = true;
        console.log('dis1')
    } 
    if(currentIndex > 0) {
        paginators.moveLeft.disabled = false;
        paginators.jumpLeft.disabled = false;
        console.log('dis2')
    } 
    if(currentIndex >= Math.ceil(getCardsCount()/ currentCards)-1) {
        paginators.moveRight.disabled = true;
        paginators.jumpRight.disabled = true;
        console.log('dis3')
    }
    if (currentIndex < Math.ceil(getCardsCount()/ currentCards)-1) {
        paginators.moveRight.disabled = false;
        paginators.jumpRight.disabled = false;
        console.log('dis4')
    }
}