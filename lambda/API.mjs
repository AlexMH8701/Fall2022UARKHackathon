import fetch from 'node-fetch';

async function getUser() {
  try {
    const response = await fetch('https://www.randomnumberapi.com/api/v1.0/random?min=0&max=77&count=2');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    return (result);
  } catch (err) {
    console.log(err);
  }
}