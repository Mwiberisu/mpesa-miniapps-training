function handleLogin() {
    const emailElement =document.getElementById('email');
    const passwordElement = document.getElementById('password');

    const email = emailElement.value;
    const password = passwordElement.value;
    validateEmail(email)
    validatePassword(password);
}
function validatePassword(password) {
    if(password.length <8){
        console.log('Password must be at least 8 characters');
    }
    else{
        console.log("Password is valid");
    }
}
function validateEmail(email) {
    if(email.length < 1){
        console.log('Email is not a valid email');
    }
    else{
        console.log("Email is valid");
    }
}