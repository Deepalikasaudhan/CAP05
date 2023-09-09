myFrom = addEventListener("submit", function(e){
    e.preventDefault();

    let taskName = document.getElementById("task").value;

    let priority = document.getElementById("priority").value

    let tbody = document.querySelector("tbody");
    let row =  document.createElement("tr");

    let data =[taskName, priority]

    data.forEach((ele)=>{
        let td =document.createElement("td");
        td.innerText = ele
        row.appendChild(td);
    })
    tbody.appendChild(row);
})