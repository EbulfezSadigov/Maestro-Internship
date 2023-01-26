let numbers = document.querySelectorAll('#calculator .buttons button')
let operands = document.querySelectorAll('#calculator .buttons button[data-operators]')
let equal = document.querySelector('#calculator .response .equal')
let operation = document.querySelector('#calculator .response .operation')
let response = document.querySelector('#calculator .response .respond')

numbers.forEach(element => {
    element.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                operation.innerText = ''
                response.innerText = ''
                equal.innerText = ''
                break;
            case '=':
                try {
                    response.innerText = eval(operation.innerText)
                    let float = response.innerText - parseInt(response.innerText);
                    if (float > 0 && String(float).length > 6) {
                        response.innerText = (+(response.innerText)).toFixed(6)
                        equal.innerText = '='
                    }
                    equal.innerText = '=';
                } catch {
                    operation.innerText = 'Error!'
                }
                break;
            case '←':
                operation.innerText = operation.innerText.slice(0, -1)
                break;
            case '+/-':
                operation.innerText = -(operation.innerText)
                break;
            default:
                let arr = ['+', '-', '*', '/', '%']
                if (operation.innerText == 'Error!') {
                    operation.innerText = ""
                    operation.innerText += e.target.innerText;
                }
                else {
                    operation.innerText += e.target.innerText;
                }
                if (arr.includes(operation.innerText[operation.innerText.length - 1]) && arr.includes(operation.innerText[operation.innerText.length - 2])) {
                    let k = (operation.innerText.replace(operation.innerText[operation.innerText.length - 2], operation.innerText[operation.innerText.length - 1])).slice(0, -1)
                    operation.innerText = k;
                }
        }
    })
});
