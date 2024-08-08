const inputField = document.querySelector('.input-field');
const addBtn = document.getElementById('addBtn');
const listItem = document.querySelector('.listItem');
const listBoard = document.querySelector('.listBoard');

addBtn.addEventListener('click', () => {
  const content = inputField.value;
  const resultHTML = `<div class="listItem">${content}</div>
      <button class="listBtn"></button>`;
  listBoard.innerHTML = resultHTML;
});
