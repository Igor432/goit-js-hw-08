import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEYS = 'feedback-form-state'

const formData = {

};

checkData();

// arrow function expression
const onInput = (evt) => {
    formData[evt.target.name] = evt.target.value;

    console.log(formData)

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}

form.addEventListener('input', throttle(onInput, 500));


function checkData() {
    const JSONdata = localStorage.getItem('feedback-form-state');
    const dataParsed = JSON.parse(JSONdata);

    if (dataParsed) {
        email.value = dataParsed.email;
        message.innerHTML = dataParsed.message;
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEYS);
    event.currentTarget.reset();



})




