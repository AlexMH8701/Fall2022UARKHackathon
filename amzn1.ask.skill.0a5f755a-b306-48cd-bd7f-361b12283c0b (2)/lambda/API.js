const axios = require('axios');

//test

module.exports.fetchMove = async function fetchMove() {
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

module.exports.doPostRequest = async function doPostRequest(pieceMoved, movedTo) {

    let payload = { name: pieceMoved + "" + movedTo };

    let res = await axios.post('http://httpbin.org/post', payload);

    let data = res.data;
    
    data = '{"ok": true}'
    
    var final = JSON.parse(data)
    
    if(final.ok === true){
        return "true";
    }
    
    return "false";
    

}

module.exports.makeGame = async function makeGame(){
    //code for making makeGame
    
    var error = false;
    var returned = true;
    if(error){
        return "there was an error, try again"
    }
    
    return "challenged Alex to a game"
    
}
