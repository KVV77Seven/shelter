const bodyStyle = document.body.style;

export function lockScroll() {
    bodyStyle.overflow = 'hidden';
}
export function unlockScroll() {
    bodyStyle.overflow = '';
}

export default function TEST() {

}