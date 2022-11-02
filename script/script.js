'use scrict'

// Registration

let emailRegistration = document.querySelector('#email-reg');
let passwordRegistration = document.querySelector('#password-reg');
let btnRegistration = document.querySelector('#btn-reg');
let errorEmailRegistration = document.querySelector('#email-empty');
let errorPasswordRegistration = document.querySelector('#password-empty');
let passwordErrorLength = document.querySelector('#password-lenght');
let emailValid = document.querySelector('#email-valid');
let checkboxRegistration = document.querySelector('#check-reg');
let checkboxError = document.querySelector('#check-empty');

let custom_checkboxError = document.querySelector('.custom_checkbox')
let errEmail = document.querySelector('.errEmail');
let errPass = document.querySelector('.errPass');

let emailResult = '';
let passwordResult = '';
let checkResult = null;

let emailValidUser, passwordValid, checkedValid = false;
let user = {};

emailRegistration.addEventListener('input', (even) => {
    emailResult = even.target.value.trim();
});

passwordRegistration.addEventListener('input', (even) => {
    passwordResult = even.target.value.trim();
});

checkboxRegistration.addEventListener('change', (even) => {
  checkResult = even.target.checked;
})

// checkboxRegistration.addEventListener('change', function() {
//     if(this.checked) {
//         checkboxError.style.display = "none";
//         checkedValid = true;
//     } else {
//         checkboxError.style.display = "block";
//         checkedValid = false;
//     }
// });


btnRegistration.addEventListener('click', (even) => {
    even.preventDefault();
    validRegistration();
    localData();
    // console.log('user', user);
});

const validRegistration = () => {
        // Проверка на пустые строки email  и пароль
    if(emailResult.length == '') {
        errorEmailRegistration.style.display = 'block';
        emailRegistration.style.borderColor = "#CB2424";
        emailValid.style.display = 'none';
        errEmail.style.color = '#CB2424';
    } else {
        errorEmailRegistration.style.display = 'none';
        emailRegistration.style.borderColor = "inherit";
        errEmail.style.color = '#787878';

           // Проверка валидности email поля
      if(!validateEmail(emailResult)) {
        emailValid.style.display = 'block';
        errEmail.style.color = '#CB2424';
        emailValidUser = false;
    } else {
        emailValid.style.display = 'none';
        errEmail.style.color = '#787878';
        user.email = emailResult;
        emailValidUser = true;
    }
    }

   
    if(passwordResult.length == '') {
        errorPasswordRegistration.style.display = 'block';
        passwordRegistration.style.borderColor = "#CB2424";
        errPass.style.color = '#CB2424';
    } else {
        errorPasswordRegistration.style.display = 'none';
        passwordRegistration.style.borderColor = "inherit";
        errPass.style.color = '#787878';

             // проверка на длину пароля
    if(passwordResult.length < 8 ) {
        passwordErrorLength.style.display = 'block';
        
        errPass.style.color = '#CB2424';
        passwordValid = false;
    } else {
        passwordErrorLength.style.display = 'none';
        errPass.style.color = '#787878';
        user.password = passwordResult;
        passwordValid = true;
    }
    }

   
    if(!checkResult) {
        checkboxError.style.display = "block";
        custom_checkboxError.style.borderColor = '#CB2424';
        checkedValid = false;
    } else {
        checkboxError.style.display = "none";
        custom_checkboxError.style.borderColor = '#787878';
        checkedValid = true;
    }
};

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

const localData = () => {
    if(emailValidUser && passwordValid && checkedValid) {
        localStorage.user = JSON.stringify(user);
        console.log(localStorage);
    }
}




