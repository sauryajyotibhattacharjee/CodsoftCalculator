let result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function calculateResult() {
  try {
    // Replace square root function with the Math.sqrt() method
    result.value = eval(result.value.replace('sqrt(', 'Math.sqrt('));
    // Replace power function with the Math.pow() method
    result.value = eval(result.value.replace('^', '**'));
  } catch (error) {
    result.value = 'Error';
  }
}
