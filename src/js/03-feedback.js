import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea")
}
let formData = {};

const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputCreateFormData, 500));

function onInputCreateFormData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}
function populateForm() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    console.log(savedMessage)

    const parsedMessage = JSON.parse(savedMessage);
    
    if (parsedMessage) { 
        refs.inputEmail.value = parsedMessage.email;
        refs.textMessage.value = parsedMessage.message;
    };

    console.log(parsedMessage);
}

