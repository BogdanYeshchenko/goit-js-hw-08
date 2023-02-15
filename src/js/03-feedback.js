import throttle from 'lodash.throttle';

const el = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

startPage();

const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

el.form.addEventListener('input', throttle(handleTakeDataFromForm, 500));
el.form.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(evt) {
  evt.preventDefault();

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  evt.currentTarget.reset();
}

function handleTakeDataFromForm(evt) {
  formData[evt.target.name] = evt.target.value;

  const formDataJson = JSON.stringify(formData);

  localStorage.setItem('feedback-form-state', formDataJson);
}

function startPage() {
  const savedMessageJson = localStorage.getItem('feedback-form-state');
  const savedMessage = JSON.parse(savedMessageJson);

  if (savedMessageJson) {
    console.log(savedMessage);
    el.input.value = savedMessage.email || '';
    el.textarea.value = savedMessage.message || '';
  }
}
