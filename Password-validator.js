function validatePassword(password) {
    // Password must be at least 6 characters long
    if (password.length < 6) {
        return "Password must be at least 6 characters long.";
    }

    // Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }

    // Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    // Password must contain at least one digit
    if (!/\d/.test(password)) {
        return "Password must contain at least one digit.";
    }

    // Password must contain at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(password)) {
        return "Password must contain at least one special character.";
    }

    return "Password is valid.";
}

// Test the function
const password = "P@ssw0rd";
console.log(validatePassword(password));
