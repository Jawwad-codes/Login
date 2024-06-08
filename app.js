
let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
let userData;

function addUserData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;
    let errorMessage = document.getElementById("errorMessage"); 
    errorMessage.textContent = "";



    if (name.trim() === "") {
        errorMessage.textContent = "Name is required.";
        return false; 
    }
    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        return false; 
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false; 
    }
    userData=
    {
        'Name':name,
        'Email':email,
        'Password':password
        
    }
    let data = JSON.parse(localStorage.getItem('usersData')) || [];
    let  emailExists = data.some(function(user) {
        return user.Email === email;
    });

    if (emailExists) {
        swal("Email already exists.");
        return false; // Prevent form submission
    }


    usersData.push(userData);

    localStorage.setItem('usersData', JSON.stringify(usersData));
    

}  

function loginData(event) {
    event.preventDefault();
    const password = document.getElementById('Password').value;
    const email = document.getElementById('email').value;
    const check = usersData.find(user => user.Email === email && user.Password === password);

    if (check) {
        swal("Login successful").then(() => {
            window.location.href = 'quiz.html';
        });
    } else {
        swal("Login failed");
    }
}
document.getElementById('loginForm').addEventListener('submit', loginData);



