const axios = require('axios');

const weatherapp = (address) => {
    return axios.get(`http://api.weatherapi.com/v1/current.json`, {
        params: {
            key: '6b96a95b54424361912185410232210', // Replace with your actual API key
            q: address,
        },
    })
    .then((response) => response.data)
    .catch((error) => {
        throw new Error(error.message);
    });
}

module.exports = weatherapp;

