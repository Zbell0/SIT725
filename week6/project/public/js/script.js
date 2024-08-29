const addBtn = document.querySelector('.addBtn');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resetBtn = document.querySelector('.resetBtn');
const answer = document.querySelector('.result');
const error = document.querySelector('.error');
const historyBtn = document.querySelector('.historyBtn');
const historyContainer = document.querySelector('.history-container');
addBtn.addEventListener('click', async () => {
  const input1 = parseInt(num1.value);
  const input2 = parseInt(num2.value);

  const result = addTwoNum(input1, input2);
  answer.innerHTML = `Answer is: ${result}`;
  await storeResult(input1, input2, result);
});

const addTwoNum = (n1, n2) => {
  if (!isNaN(n1) && !isNaN(n2)) {
    return n1 + n2;
  } else {
    error.innerHTML = 'Enter valid numbers';
    answer.style.display = 'none';
    return NaN;
  }
};

resetBtn.addEventListener('click', () => {
  num1.value = '';
  num2.value = '';
  answer.innerHTML = '';
  error.innerHTML = '';
  answer.style.display = 'block';
});

async function storeResult(num1, num2, sum) {
  await fetch('http://localhost:3000/api/calculate/storeResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ num1, num2, sum }),
  });
}

historyBtn.addEventListener('click', async () => {
  const isVisible = historyContainer.style.display !== 'none';

  if (isVisible) {
    historyContainer.style.display = 'none';
  } else {
    const response = await fetch('http://localhost:3000/api/calculate/result');
    const results = await response.json();
    displayHistory(results);
    historyContainer.style.display = 'block';
  }
});

function displayHistory(results) {
  const historyBody = document.querySelector('.history-body');
  historyBody.innerHTML = `  <thead>
      <tr>
        <th>Num1</th>
        <th>Num2</th>
        <th>Sum</th>
      </tr>
    </thead>`;

  results.forEach((result) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${result.num1}</td>
      <td>${result.num2}</td>
      <td>${result.sum}</td>
    `;
    historyBody.appendChild(row);
  });
}
