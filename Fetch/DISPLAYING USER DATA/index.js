let a= document.getElementById('userContainer')
let button= document.getElementById('fetchButton')

button.addEventListener('click',function(){
         fetch('https://reqres.in/api/users')
        .then(response=>response.json())
        .then(data=>{
            console.log("Data",data)
                let users=data.data
           
                 users.forEach(user=>{
                    let usercard=document.createElement('div')
                   
                    usercard.className='user-card'
                    let image=document.createElement('img')
                    image.src=user.avatar
                image.alt = `${user.first_name} ${user.last_name}'s avatar`;
                  
                const userName = document.createElement('h2');
                userName.textContent = `${user.first_name} ${user.last_name}`;

                const userEmail = document.createElement('p');
                userEmail.textContent = `Email: ${user.email}`;
                usercard.appendChild(image)
                usercard.appendChild( userEmail)
                usercard.appendChild( userName)
                a.append(usercard)
                 })
     
        })
    .catch(error => console.error('Error fetching users:', error));

})