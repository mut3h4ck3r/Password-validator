# Password-validator

# Password Validation Program

This is a simple JavaScript program that validates a password based on specific criteria:
- Minimum length of 6 characters
- At least 1 lowercase letter
- At least 1 uppercase letter
- At least 1 digit
- At least 1 special character

## How to Use

1. Clone or download this repository to your local machine.
2. Open the `password-validation.js` file in a text editor.
3. Customize the `password` variable with the password you want to validate.
4. Open your browser's developer console or use a tool like Node.js to run the script.
5. The program will output whether the password is valid or which specific criteria it doesn't meet.

## Example

```javascript
const password = "P@ssw0rd";
console.log(validatePassword(password));
