
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEYS = 'feedback-form-state'

var formData = {};

checkData();


// arrow function expression
const onInput = (evt) => {
    formData = {
        email: email.value,
        message: message.value
    }
    console.log(formData)
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}

form.addEventListener('input', throttle(onInput, 500));


function checkData() {
    const JSONdata = localStorage.getItem('feedback-form-state');
    const dataParsed = JSON.parse(JSONdata);

    console.log(dataParsed);

    if (dataParsed) {
        email.value = dataParsed.email;
        message.value = dataParsed.message;
    }
}


form.addEventListener('submit', (event) => {
    console.log("email:", email.value)
    console.log("message:", message.value)
    localStorage.removeItem(STORAGE_KEYS);
    event.currentTarget.reset();
    event.preventDefault();

})




