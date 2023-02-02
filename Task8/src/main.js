const togglePassword = document.querySelector('#togglePassword');
const input = document.querySelector('.myInput');
const password = document.querySelector('#id_password');
const email = document.querySelector('#email');
const passtext = document.querySelector('.myPasswordText');
const emailtext = document.querySelector('.myEmailText');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    if (e.target.classList.contains('bi-eye-fill')) {
        e.target.classList.remove('bi-eye-fill')
        e.target.classList.add('bi-eye-slash-fill')
    }
    else {
        e.target.classList.remove('bi-eye-slash-fill')
        e.target.classList.add('bi-eye-fill')
    }
});

passwordValidate()
emailValidate()


function passwordValidate() {
    password.addEventListener('keyup', (e) => {
        let passwordValue = (e.target.value).trim();
        if (passwordValue.length >= 10 && passwordValue.match('[A-Z]') && passwordValue.match('(?=.*[_@#$])')) {
            password.classList.remove('error')
            password.classList.add('success')
            passtext.innerText = 'Password is secure';
            passtext.classList.remove('errorText')
            passtext.classList.add('successText')
        }
        else if (passwordValue.length === 0) {
            password.classList.remove('error')
            password.classList.remove('success')
            password.classList.add('active')
            passtext.innerText = '';
        }
        else {
            passtext.innerText = ''
            password.classList.remove('success')
            password.classList.add('error')
            passtext.innerText = 'Enter a valid Password*';
            passtext.classList.add('errorText')
        }

        if (password.classList.contains('success') && email.classList.contains('success')) {
            input.disabled = false;
        }
        else {
            input.disabled = true
        }

    })
}

function emailValidate() {
    email.addEventListener('keyup', (e) => {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let emailValue = (e.target.value).trim();
        if (emailValue.match(emailPattern)) {
            email.classList.remove('error')
            email.classList.add('success')
            emailtext.innerText = 'Email is secure';
            emailtext.classList.remove('errorText')
            emailtext.classList.add('successText')
        }
        else if (emailValue.length === 0) {
            email.classList.remove('error')
            email.classList.remove('success')
            email.classList.add('active')
            emailtext.innerText = '';
        }
        else {
            emailtext.innerText = '';
            email.classList.remove('success')
            email.classList.add('error')
            emailtext.innerText = 'Enter a valid Email*';
            emailtext.classList.add('errorText')
        }
        if (password.classList.contains('success') && email.classList.contains('success')) {
            input.disabled = false;
        }
        else {
            input.disabled = true
        }
    })
}