function validateLogin() {
  // Get input values
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Check if username and password match predefined values
  if (username === "admin" && password === "password123") {
    document.getElementById("loginMessage").textContent = "Login successful!";

    // Redirect to another HTML file after successful login
    window.location.href = "index.html";
  } else {
    document.getElementById("loginMessage").textContent =
      "Invalid username or password. Please try again.";
  }
}
