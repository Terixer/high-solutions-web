export const userService = {
    login,
    logout
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    return fetch('/api/login', requestOptions)
        .then(handleResponse)
        .then(data => {

            const user = {
                email: email,
                token: data.access_token
            }
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.json().then(data => {
        console.log(data);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}