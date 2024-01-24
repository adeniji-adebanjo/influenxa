// Function to validate name in real-time
function validateName() {
  let name = document.getElementById("name").value;
  let nameError = document.getElementById("nameError");

  if (name.length > 7) {
    nameError.textContent = "Invalid name. Maximum length is 7 characters.";
  } else {
    nameError.textContent = "";
  }
}

// Function to validate email on blur
function validateEmail() {
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");

  if (!/\S+@\S+\.\S+/.test(email) || email.indexOf("@") === -1) {
    emailError.textContent =
      'Invalid email. Please enter a valid email address with "@".';
  } else {
    emailError.textContent = "";
  }
}

// Function to validate the form on submission
function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  // Validate name
  if (name.length <= 7) {
    alert("Invalid name. Maximum length is 7 characters.");
    return;
  }

  // Validate email
  if (!/\S+@\S+\.\S+/.test(email) || email.indexOf("@") === -1) {
    alert('Invalid email. Please enter a valid email address with "@".');
    return;
  }

  // Validate number
  if (isNaN(number)) {
    alert("Invalid number. Please enter a valid number.");
    return;
  }

  alert("Form validation successful! Now proceeding with form submission.");
  document.getElementById("myForm").submit();
}

// Add event listeners
document.getElementById("name").addEventListener("input", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);

let yourTemp = prompt("Enter your temperature");
