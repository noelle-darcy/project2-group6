$("#button").click(function() {  
  $("#box form").toggle("slow");
  return true;
});

$("#buttontwo").click(function() {
	$("#boxtwo form").toggle("slow");
	return true;
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


// TROY IS WORKING ON THIS
const signUpForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup');
    const email = document.querySelector('#email-signup');
    const password = document.querySelector('#password-signup');

    if (name && email && password) {
        const response = await fetch('/api/user', {  // possibly need to change this to populate that area with an empty div, no idea.
            method: 'POST',
            body: JSON.stringify({
							username: name.value,
							email: email.value,
							password: password.value
						}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
						console.log(body);
        } else {
            alert(response.statusText);
        }
    }
};

// document
//     .querySelector('#login-form')
//     .addEventListener('submit', loginForm);

document
		.querySelector('#register-form')
		.addEventListener('register', signUpForm);

