var throttle = require('lodash.throttle');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedSettings = JSON.parse(savedSettings);
if (parsedSettings === null) localStorage.setItem(LOCALSTORAGE_KEY, '{"email":"", "message":""}');
input.value = parsedSettings.email;
textArea.value = parsedSettings.message;
const obj = {};
form.addEventListener(
  'input',
  throttle(event => {
    if (event.currentTarget) {
      obj.email = event.currentTarget.elements.email.value;
      obj.message = event.currentTarget.elements.message.value;
    }
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(obj));
  }, 500)
);
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(parsedSettings, parsedSettings.email, parsedSettings.message); // settings object
  localStorage.removeItem(LOCALSTORAGE_KEY);
  input.value = '';
  textArea.value = '';
});
