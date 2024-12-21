document.addEventListener('DOMContentLoaded', () => {
    const dataForm = document.getElementById('data-form');
    const dataTableBody = document.querySelector('#data-table tbody');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResult = document.getElementById('search-result');
    let dataStore = [];

    dataForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(dataForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            city: formData.get('city')
        };

        dataStore.push(data);
        addRowToTable(data);

        dataForm.reset();
    });

    function addRowToTable(data) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.city}</td>
        `;
        dataTableBody.appendChild(row);
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const result = dataStore.find(item => item.name.toLowerCase() === query);

        if (result) {
            searchResult.innerHTML = `
                <p><strong>Name:</strong> ${result.name}</p>
                <p><strong>Email:</strong> ${result.email}</p>
                <p><strong>Phone Number:</strong> ${result.phone}</p>
                <p><strong>City:</strong> ${result.city}</p>
            `;
        } else {
            searchResult.innerHTML = `<p>No results found for "${query}"</p>`;
        }
    });
});
//hoisting, temporal dead zone
//annonymous function, self invoke and call
//closure,lescial scoping