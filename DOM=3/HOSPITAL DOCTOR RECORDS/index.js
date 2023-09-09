// fill in javascript code here

myFrom = addEventListener("submit", function(e){
    e.preventDefault();
   
     let name = document.getElementById("name").value;
     let docID = document.getElementById("docID").value;
     let dept = document.getElementById("dept").value;
     let exp = document.getElementById("exp").value;
     let email = document.getElementById("email").value;
     let mbl = document.getElementById("mbl").value;


   let role;

   if(exp > 5)
   {
    role = "Senior"
   }
   else if (exp>=2 && exp<=5)
   {
    role =  "Junior"
   }
   else{
    role = "Trainee"
   }

   let tbody = document.querySelector("tbody");

   let row = document.createElement("tr");

   let data = [name,docID,dept,exp,email,mbl,role]

   data.forEach((ele)=>{
      let td =document.createElement("td");
      td.innerText = ele
      row.appendChild(td);
   })

   let deleteTd = document.createElement("td");
   let deleteBtn = document.createElement("button");
   deleteBtn.innerText="Delete";

   deleteBtn.addEventListener("click",function(){
       tbody.removeChild(row);
   })

   deleteTd.appendChild(deleteBtn);
   row.appendChild(deleteTd);


     tbody.appendChild(row);

})
