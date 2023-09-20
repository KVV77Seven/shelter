const bodyStyle = document.body.style;

export function lockScroll() {
    bodyStyle.overflow = 'hidden';
}
export function unlockScroll() {
    bodyStyle.overflow = '';
}

export function appendChilds(element, childs) {
    childs.forEach((child) => {
        element.appendChild(child);
    })
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export function shuffleArray(arr) {
    const shuffledArray = [...arr];
    for (let i = 0; i < shuffledArray.length; i++) {
        const rand = getRandomInt(shuffledArray.length);
        const rand2 = getRandomInt(shuffledArray.length);
        [shuffledArray[rand], shuffledArray[rand2]] = [shuffledArray[rand2], shuffledArray[rand]];
    }
    return shuffledArray;
}
export default function TEST() {

}