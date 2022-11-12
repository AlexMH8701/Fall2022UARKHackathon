const Fetch = require('node-fetch');

async function getUser() {
    try {
      const response = await (Fetch.fetch('https://www.randomnumberapi.com/api/v1.0/random?min=0&max=77&count=2'));
  
    } catch (err) {
      console.log(err);
    }
  }