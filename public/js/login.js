const loginForm = async function(event) {
    event.preventDefault();

    const username = document.querySelector('#username');
    const password = document.querySelector('#passowrd');

    const response = await fetch('/api/user/login', {
        method: 'POST', 
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
        headers: { 'Content-Type': ''}

        }
    })

}