function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');

    if(pin == typedPin){
        success.style.display = 'block';
        failed.style.display = 'none';
    }
    else{
        success.style.display = 'none';
        failed.style.display = 'block';
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    generatePin();
})
document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('display-pin').value = '';
})
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})