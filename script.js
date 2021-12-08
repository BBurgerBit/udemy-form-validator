const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Check email is valid
function checkEmail(input) {
    const re = /\S+@\S+\.\S+/;
    if(re.test(input.value)) {
        showSucces(input);
    } else {
        showError (input, "Email is not valid");
    }
}

// Show succes outline
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control succes";
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);    
        } else {
            showSucces(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSucces(input);
    }
}

// Check password match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Password do not match");
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

/* 
    <LONGER ALTERNATIVE FOR THE checkRequired FUNCTION WITHOUT AN ARRAY>
    
    if (username.value === "") {
        showError(username, "Username is required");
    } else {
        showSucces(username)
    }

    if (email.value === "") {
        showError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
        showError(email, "Email is not valid");
    } else {
        showSucces(email)
    }

    if (password.value === "") {
        showError(password, "Password is required");
    } else {
        showSucces(password)
    }

    if (password2.value === "") {
        showError(password2, "Password is required");
    } else {
        showSucces(password2)
    }
*/

})