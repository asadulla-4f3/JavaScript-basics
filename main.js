const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const queryType = document.getElementsByName("option");
const checkbox = document.getElementById("terms");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const queryTypeError = document.getElementById("queryTypeError");
const messageError = document.getElementById("messageError");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  let isValid = false;

  // Validate First Name
  if (firstName.value.trim() === "") {
    firstNameError.textContent = "First name is required.";
    firstNameError.classList.add("error");
    isValid = false;
  } else {
    firstNameError.textContent = "";
    firstNameError.classList.remove("error");
    isValid = true;
  }

  // Validate Last Name
  if (lastName.value.trim() === "") {
    lastNameError.textContent = "Last name is required.";
    lastNameError.classList.add("error");
    isValid = false;
  } else {
    lastNameError.textContent = "";
    lastNameError.classList.remove("error");
    isValid = true;
  }
  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailError.classList.add("error");
    isValid = false;
  } else if (!email.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.classList.add("error");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error");
    isValid = true;
  }

  // Validate Query Type
  let querySelected = false;
  for (let i = 0; i < queryType.length; i++) {
    if (queryType[i].checked) {
      querySelected = true;
      break;
    }
  }
  if (!querySelected) {
    queryTypeError.textContent = "Please select a query type.";
    queryTypeError.classList.add("error");
    isValid = false;
  } else {
    queryTypeError.textContent = "";
    queryTypeError.classList.remove("error");
    isValid = true;
  }

  // Validate Message
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    messageError.classList.add("error");
    isValid = false;
  } else {
    messageError.textContent = "";
    messageError.classList.remove("error");
    isValid = true;
  }

  // Validate Checkbox
  if (!checkbox.checked) {
    termsError.textContent = "You must consent to be contacted.";
    termsError.classList.add("error");
    isValid = false;
  } else {
    termsError.textContent = "";
    termsError.classList.remove("error");
    isValid = true;
  }

  if (!isValid) {
    event.preventDefault();
    console.log("Form submission prevented due to validation errors.");
  } else {
    console.log("Form submitted successfully.");
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
    for (let i = 0; i < queryType.length; i++) {
      queryType[i].checked = false;
    }
    checkbox.checked = false;
  }
});
