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

export default function TEST() {

}