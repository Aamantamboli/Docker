let firstNumberElement = (Math.ceil(Math.random() * 100))
let secondNumberElement = (Math.ceil(Math.random() * 100))

document.getElementById('firstNumber').innerHTML = firstNumberElement;
document.getElementById('secondNumber').innerHTML = secondNumberElement;

function checkResult() {
    if (parseInt(document.getElementById('unserInput').value) === (parseInt(firstNumberElement) + parseInt(secondNumberElement))) {
        document.getElementById('textResult').innerHTML = 'Congratulations you got it right';
        document.getElementById('textResult').style.backgroundColor = '#028a0f';
    } else {
        document.getElementById('textResult').innerHTML = 'Please Try Again !';
        document.getElementById('textResult').style.backgroundColor = '#1e217c';

    }
}


function restartGame() {
    let firstNumberElement = (Math.ceil(Math.random() * 100));
    let secondNumberElement = (Math.ceil(Math.random() * 100));
    document.getElementById('unserInput').value = '';
    document.getElementById('textResult').innerHTML = '';
}