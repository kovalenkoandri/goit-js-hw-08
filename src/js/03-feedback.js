
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

input.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
textArea.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;

form.addEventListener('input', event => {
  const obj = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
});
