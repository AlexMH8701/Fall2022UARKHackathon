
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
    //do a call to an api
    console.log("int x " + x)
    var value = '<break time="3s"/>'
    return x
}

module.exports = {
    getMove,
    pauseTime
}