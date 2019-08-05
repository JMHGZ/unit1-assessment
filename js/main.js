let sum;

let displayEl = document.querySelector('h1 span');
let input = document.getElementById('numInp');



document.getElementById('btn1').addEventListener('click', function() {
    sum += parseFloat(input.value)
    render();
});

document.getElementById('btn2').addEventListener('click', function() {
     sum -= input.value
    render();
});

function init() {
    sum = 0;
    render();
}

function render() {
    displayEl.textContent = sum;
};

init();