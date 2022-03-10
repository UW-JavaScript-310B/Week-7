const nameField = document.getElementById("first-name");
const form = document.getElementById("connect-form");

// checkValidation
// Checks validation of connect-form.
const checkValidation = (e) => {
	// validState checks if nameField's value has a length > 3.
	const validState = nameField.value.length > 3;
	if (!validState) {
	e.preventDefault();
		// setCustomValidity() attached to nameField with a custom message.
		nameField.setCustomValidity("Your first name but more than 3 letters.");
		// Adds the "invalid" class to nameField.
		nameField.closest("form-group").classList.add("invalid");
		console.log("Bad input.");
	} else {
		nameField.validity.valid = true;
		nameField.closest("form-group").classList.remove("invalid");
		nameField.closest("form-group").classList.add("valid");
	}
};

form.addEventListener("submit", checkValidation);