const addBtn = document.querySelector('.addBtn');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resetBtn = document.querySelector('.resetBtn');
const answer = document.querySelector('.result');
const error = document.querySelector('.error');

addBtn.addEventListener('click', () => {
  const input1 = parseInt(num1.value);
  const input2 = parseInt(num2.value);

  const result = addTwoNum(input1, input2);
  console.log(result);

  answer.innerHTML = `Answer is : ${result}`;
});

const addTwoNum = (n1, n2) => {
  if ((n1 > 0 && n2 > 0) || !isNaN(n1, n2)) {
    return n1 + n2;
  } else {
    errorMsg();
  }
};

resetBtn.addEventListener('click', () => {
  num1.value = '';
  num2.value = '';
  answer.innerHTML = ``;
  error.innerHTML = ``;
});

function errorMsg() {
  error.innerHTML = `Enter valid number`;
  answer.style.display = none;
}
