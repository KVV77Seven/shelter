import {breakpoints, currentBreakpoint} from "shelter/jsSrc/breakpoints";
import {getCardById} from "shelter/jsSrc/petCardGetter";

const container = document.getElementById('pagination__cards-container');

let currentCards = 0
const countCards = {
    sm: 0,
    md: 0,
    lg: 0
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

    for (let i = 0; i < currentCards; i++) {
        const {card} = getCardById(i);
        container.appendChild(card);
    }

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

function onBpChange(e) {
    setCurrentCardsFromBp(e.detail);
}