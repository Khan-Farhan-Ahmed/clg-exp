const signIn = () => {
    window.location.href = "../SignIn/index.html";
}

const Home = () => {
    window.location.href = "../MyApp/index.html"
}


// Form aur fields select karna
const form = document.querySelector('.inputs');
const name = document.getElementById('name');
const email = document.getElementById('email');
const birth = document.getElementById('birth');
const password = document.getElementById('password');
const confPassword = document.getElementById('Confpassword');

// Regex patterns
const nameRegex = /^[a-zA-Z\s]{3,30}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;


form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let errors = [];

    if (!nameRegex.test(name.value.trim())) {
        errors.push("Name must be 3-30 letters and contain only letters and spaces.");
    }
    if (!emailRegex.test(email.value.trim())) {
        errors.push("Please enter a valid email address.");
    }
    if (!birth.value) {
        errors.push("Please select your birth date.");
    }
    if (!passwordRegex.test(password.value.trim())) {
        errors.push("Password must be minimum 8 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
    }
    if (password.value.trim() !== confPassword.value.trim()) {
        errors.push("Passwords do not match.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }
    

    // Saving the data to our local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email.value.trim())) {
        alert("Email already registered!");
        return;
    }

    users.push({
    name: name.value.trim(),
    email: email.value.trim(),
    birth: birth.value,
    password: password.value.trim()
    });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful! Please login.");
    window.location.href = "../SignIn/index.html";
});