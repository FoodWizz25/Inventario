const container = document.getElementById('container');
const toSignUp = document.getElementById('toSignUp');
const toSignIn = document.getElementById('toSignIn');

toSignUp.addEventListener('click', () => {
    container.classList.remove('register-mode');
});
toSignIn.addEventListener('click', () => {
    container.classList.add('register-mode');
});