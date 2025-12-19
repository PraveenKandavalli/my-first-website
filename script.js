function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (user === "admin" && pass === "1234") {
        message.style.color = "green";
        message.innerText = "Login Successful!";
    } else {
        message.style.color = "red";
        message.innerText = "Invalid username or password";
    }

}
