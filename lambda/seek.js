const https = require('https');
const lichessPath = 'https://lichess.org/api/board/seek';


exports.makeGame = (username, rated, time, increment, variant, auth, callback2) => {

    const options = {
        host: 'lichess.org',
        path: `/api/challenge/${username}?color=white&rated=${rated}&time=${time}&increment=${increment}&variant=${variant}`,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + auth,
        }
    };

    const callback1 = function(response) {
        let str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            callback2(str);
        });
        
    }

    var req = https.request(options, callback1);
    req.end();

}