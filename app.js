const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.grid button');

buttons.forEach(b => b.addEventListener('click', clickHandler))

function clickHandler(e) {

    if (e.target.innerText == '=') {
        try {
            result.innerText = eval(result.innerText)
        } catch (error) {
            result.innerText = 'Invalid Input '
        }
    } else if (e.target.innerText == 'C') {
        result.innerText = ''
    } else if (e.target.innerText == '←') {
        result.innerText = result.innerText.slice(0, -1)
    } else {
        result.innerText += e.target.innerText;
    }
}
