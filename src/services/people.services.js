import { authHeader } from '../helpers';

export const peopleService = {
    getPeople
};

function getPeople() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...authHeader()
        },

    }

    return fetch('/api/people', requestOptions)
        .then(handleResponse)
        .then(data => data);
}


function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}