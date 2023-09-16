const input = document.getElementById('card-input');
let lastValue = '';
export function init() {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        if (value.length > 20) {
            value = value.substring(0, 20);
        }
        if (isNaN(value)) {
            input.value = lastValue;
            return;
        }
        for (let i = 4; i < value.length; i = i + 5) {
            value = value.slice(0,i) + ' ' + value.slice(i);
        }
        input.value = value;
        lastValue = value;
    })
}
