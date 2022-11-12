const https = require('https');
const lichessPath = 'https://lichess.org/api/board/seek';


exports.makeMove = (gameId, move, auth, callback2) => {

    const options = {
        host: 'lichess.org',
        path: `/api/board/game/${gameId}/move/${move}`,
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

    console.log('in here')

    var req = https.request(options, callback1);
    req.end();

}