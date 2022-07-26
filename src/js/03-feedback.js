var throttle = require('lodash.throttle');

const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

const savedSettings = localStorage.getItem('feedback-form-state');
const parsedSettings = JSON.parse(savedSettings);
input.value = parsedSettings.email;
textArea.value = parsedSettings.message;
form.addEventListener(
  'input',
  throttle(event => {
    const obj = {
      email: event.currentTarget.elements.email.value,
      message: event.currentTarget.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  }, 500)
);
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(parsedSettings, parsedSettings.email, parsedSettings.message); // settings object
  localStorage.setItem('feedback-form-state', '{"email":"", "message":""}');
  input.value = '';
  textArea.value = '';
});
