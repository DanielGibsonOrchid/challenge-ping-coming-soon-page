const emailField = document.getElementById('email');
const submitBtn = document.getElementById('btn');
const errorMsg = document.querySelector('.error-msg');

submitBtn.addEventListener("click", () => {
    let re = /\S+@\S+\.\S+/;

    if (!emailField.value.match(re)) {
        errorMsg.style.visibility = "visible";
        emailField.style.border = "1px solid #ff5162"
    } else {
        errorMsg.style.visibility = "hidden";
        emailField.style.border = "1px solid #d8d8d8"
    }
});