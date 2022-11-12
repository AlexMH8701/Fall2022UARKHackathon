const getMove = (enemyMove) => {
    var characters = 'ABCDEFGH';
    
    var value = characters.charAt(Math.trunc(enemyMove/10)) + "" + (enemyMove % 10);
    
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