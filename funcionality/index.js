const names = ["Michael", "Daniel", "Kevin"]; // Array of authorized names
const nameInput = document.getElementById('nameInput');
const validateButton = document.getElementById('main-login-btn-signin');


validateButton.addEventListener('click', () => {
  const enteredName = nameInput.value.trim(); // Trim leading/trailing spaces

  if (enteredName === "") {
    validationMessage.textContent = "Please enter your name.";
    return; // Prevent unnecessary processing if name is empty
  }

  const isInList = names.includes(enteredName);

  if (isInList) {
    validationMessage.textContent = "You're in the list! Nice!";
  } else {
    validationMessage.textContent = "You're not in the list. Sorry.";
  }
});
