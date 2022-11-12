const https = require('https');

const loadAPI = () => {
    var finaldata = '';
    let data = '';
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        
        

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        finaldata = ((JSON.parse(data).explanation))
    });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    })
    
    return data;
}
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
    pauseTime,
    loadAPI
}