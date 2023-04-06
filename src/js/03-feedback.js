import _ from 'lodash';

const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  _.throttle(event => {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const feedback = { email, message };

    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
  }, 500)
);

window.addEventListener('load', () => {
  const feedback = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (feedback) {
    form.elements.email.value = feedback.email;
    form.elements.message.value = feedback.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const feedback = { email, message };

  localStorage.removeItem('feedback-form-state');
  form.reset();

  console.log(feedback);
});
