'use strict';

const formfieldElement = document.getElementById('formfield');
const nameInputElement = document.getElementById('formfield-name');
const emailInputElement = document.getElementById('formfield-email');
const messageInputElement = document.getElementById('formfield-massage');
const phoneInputElement = document.getElementById('formfield-phone');

formfieldElement.addEventListener('submit', (event) => {
  event.preventDefault();

  nameInputElement.value = '';
  emailInputElement.value = '';
  messageInputElement.value = '';
  phoneInputElement.value = '';

  window.alert('Sent successfully!');
});
