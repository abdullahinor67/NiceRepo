const button = document.querySelector('button');
button.addEventListener('click', () => {
    const input = document.querySelector('input');
    const name = input.value;
    const table = document.querySelector('table tbody');
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = name;
    row.appendChild(cell);
    table.appendChild(row);
    input.value = '';
});