import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea")
}
let formData = {};
// console.log(localStorage);


const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputCreateFormData, 500));

saveStreamData();

function onInputCreateFormData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    refs.form.reset();
    
    console.log(formData);
}

function saveStreamData(){
const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY))
if (savedFormData) {
    refs.email.value = savedFormData.email;
    refs.message.value = savedFormData.message;
}}
