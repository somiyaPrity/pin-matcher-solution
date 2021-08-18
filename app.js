function getPin() {
  let pin = Math.round(Math.random() * 10000);
  let pinString = pin + '';

  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  let pin = getPin();
  document.getElementById('pin-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (e) {
  const number = e.target.innerText;
  const calcInput = document.getElementById('typed-number');
  if (isNaN(number)) {
    if (number == 'C') {
      calcInput.value = '';
    }
  } else {
    const preNumber = calcInput.value;
    const newNumber = preNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  let pin = document.getElementById('pin-input').value;
  const typeNumber = document.getElementById('typed-number').value;
  const failText = document.getElementById('notify-fail');
  const successText = document.getElementById('notify-success');
  if (pin == typeNumber) {
    successText.style.display = 'block';
    failText.style.display = 'none';
  } else {
    failText.style.display = 'block';
    successText.style.display = 'none';
  }
}
