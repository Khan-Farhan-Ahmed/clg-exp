const signUp = () => {
    window.location.href = "../SignUp/index.html";
}

const Home = () => {
    window.location.href = "../MyApp/index.html"
}

const form = document.querySelector('.inputs');
const email = document.getElementById('email');
const password = document.getElementById('password');


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

function LoginAPI(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        resolve({ success: true, message: "Login successful", name: user.name });
      } else {
        resolve({ success: false, message: "Invalid email or password" });
      }
    }, 700);
  });
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let errors = [];

    if (!emailRegex.test(email.value.trim())) {
        errors.push("Please enter a valid email address.");
    }
    if (!passwordRegex.test(password.value.trim())) {
        errors.push("Password must be minimum 8 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Call the  "server" asynchronously
    const response = await LoginAPI(email.value.trim(), password.value.trim());

    if (response.success) {
        alert(`${response.message}, welcome ${response.name}!`);
        window.location.href = "../ServentPage/index.html";
    } else {
        alert(response.message);
    }
})