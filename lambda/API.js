var http = require("http"); 

function httpGet(callback) {
    var options = {
        host: 'randomnumberapi.com',
        path: '/api/v1.0/random?min=0&max=77&count=2',
        method: 'GET',
    };

    var req = http.request(options, res => {
        res.setEncoding('utf8');
        var responseString = "";
        
        //accept incoming data asynchronously
        res.on('data', chunk => {
            responseString = responseString + chunk;
        });
        
        //return the data when streaming is complete
        res.on('end', () => {
            console.log(responseString);
            callback(responseString);
        });

    });
    req.end();
}