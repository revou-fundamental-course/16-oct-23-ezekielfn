const form = document.getElementById('message-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  console.log(`Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}`);
});

const nameInput = document.getElementById('name');
const greeting = document.getElementById('greeting');

nameInput.addEventListener('input', (event) => {
  greeting.textContent = `Hi ${event.target.value}!`;
});
