const http = require('http');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1', // we changed the path to only grab one post
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getPosts = () => {
  var data = '';

  const request = http.request(options, (response) => {
    // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
    response.setEncoding('utf8');

    // As data starts streaming in, add each chunk to "data"
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      console.log(data);
    });
  });

  // Log errors if any occur
  request.on('error', (error) => {
    console.error(error);
  });

  // End the request
  request.end();
  return data;
};

const getMove = (enemyMove) => {
    var characters = 'ABCDEFGH';
    const rand1 = Math.floor(Math.random() * 7)+1
    const rand2 = Math.floor(Math.random() * 7)+1
    const rand3 = Math.floor(Math.random() * 7)+1
    const rand4 = Math.floor(Math.random() * 7)+1
    
    var value = characters.charAt(rand1) + '' + rand2 + ' to ' + characters.charAt(rand3) + '' + rand4
    
    return value 
}

const pauseTime = (x,y) => {
    //do a call to an api x = piece moved, y = position moved too
    var value = '<break time="3s"/>'
    //api returns opponent moves
    value += '\nenemy moved '  + getMove()
    return value
}

module.exports = {
    getMove,
    pauseTime
}