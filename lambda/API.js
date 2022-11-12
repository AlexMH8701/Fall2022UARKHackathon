const axios = require('axios');

module.exports.fetchJokesApi = async function fetchJokesApi() {
    let endpoint = 'https://www.randomnumberapi.com';
    let url = endpoint + '/api/v1.0/random?min=0&max=88&count=2';

    let config = {
        timeout: 6500
    }

    try {
        let response = await axios.get(url, config);
        return  response.data;
    } catch (error) {
        console.log('ERROR', error);
        return null;
    }
}