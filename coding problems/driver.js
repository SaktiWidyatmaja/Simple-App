const { alertImpostor } = require('./amongUsProblem');

const playersQueue = ["Player", "Player", "Impostor", "Player", "Player", "Player", "Player"];
const alertMessage = alertImpostor(playersQueue);
console.log(alertMessage);
