document.addEventListener("DOMContentLoaded", function () {
    const userDataForm = document.getElementById("userDataForm");
    const dataTable = document.getElementById("dataTable");
    const retrieveDataButton = document.getElementById("retrieveData");

    userDataForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;

        // Store data in Local Storage
        const user = { name, age };
        localStorage.setItem("userData", JSON.stringify(user));

        // Clear the form
        userDataForm.reset();
    });

    retrieveDataButton.addEventListener("click", function () {
        // Retrieve and display data from Local Storage
        const userData = localStorage.getItem("userData");
        if (userData) {
            const user = JSON.parse(userData);
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td>${user.name}</td>
                <td>${user.age}</td>
            `;
            dataTable.innerHTML = `
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            `;
            dataTable.appendChild(tableRow);
        }
    });
});
