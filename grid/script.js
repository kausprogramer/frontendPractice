const data = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Mike Johnson', age: 45, occupation: 'Manager' },
  ];
  
  let gridData = [...data];
  let sortField = null;
  let sortOrder = 'asc';
  
  document.addEventListener('DOMContentLoaded', () => {
    renderGrid(gridData);
  
    document.getElementById('search').addEventListener('input', handleSearch);
    document.querySelectorAll('th').forEach(th => {
      th.addEventListener('click', handleSort);
    });
  
    document.getElementById('grid').addEventListener('click', (e) => {
      if (e.target.tagName === 'TD') {
        const rowIndex = e.target.parentElement.rowIndex - 1;
        const cellIndex = e.target.cellIndex;
        handleRowClick(gridData[rowIndex]);
        handleCellClick(gridData[rowIndex], Object.keys(gridData[rowIndex])[cellIndex]);
      }
    });
  });
  
  function renderGrid(data) {
    const tbody = document.querySelector('#grid tbody');
    tbody.innerHTML = '';
    data.forEach(row => {
      const tr = document.createElement('tr');
      for (let field in row) {
        const td = document.createElement('td');
        td.textContent = row[field];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
  }
  
  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    gridData = data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm)
      )
    );
    renderGrid(gridData);
  }
  
  function handleSort(e) {
    const field = e.target.getAttribute('data-field');
    if (sortField === field) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      sortField = field;
      sortOrder = 'asc';
    }
    gridData.sort((a, b) => {
      if (a[field] < b[field]) return sortOrder === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    renderGrid(gridData);
  }
  
  function handleRowClick(row) {
    alert(`Row clicked: ${JSON.stringify(row)}`);
  }
  
  function handleCellClick(row, field) {
    alert(`Cell clicked: ${field} - ${row[field]}`);
  }
  