$("#button").click(function() {  
  $("#box form").toggle("slow");
  return false;
});

$("#buttontwo").click(function() {
	$("#boxtwo form").toggle("slow");
	return false;
});

const loginForm = async function(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim;

    if (username && password) {
        //Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
        method: 'POST', 
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
        headers: { 'Content-Type': 'application/json'},
    });
    
    if (response.ok) {
        document.location.replace('/main');
    } else {
        alert('Failed to login');
        };
    };
};

const signUpForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginForm);

// document
// 		.querySelector('.register-form')
// 		.addEventListener('register', signUpForm);

// document
//     .querySelector('.singup-form')
//     .addEventListener('submit', signUpForm);

