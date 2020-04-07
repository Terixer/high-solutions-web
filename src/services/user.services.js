import { appConstants } from '../constants/app.constants';

export const userService = {
    login
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${appConstants.API_URL}/login`, requestOptions)
        .then(handleResponse)
        .then(data => {

            const user = {
                username: username,
                token: data.access_token
            }
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.error) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}