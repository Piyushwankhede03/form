const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorText = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    errorText.textContent = "All fields are required!";
  } else if (!email.match(emailPattern)) {
    errorText.textContent = "Please enter a valid email address.";
  } else {
    errorText.textContent = "";
    alert("Form submitted successfully!");
    form.reset();
  }
});
