// Create a script based on below story:
// Currently, you are playing a game called “Among Us”, You are a ghost, 
// you have a specialty to see who is the impostor between them. 
// Alert the player in front of the impostor that is to be killed. 
// Now you are standing in front of the queue which is the end of the array

// If the impostor is the closest player to you, return `Go away!, don't kill my friend!`. 
// Otherwise, `Hey, Player number N, RUNN!!! That impostor will kill you!` 
// Where N is the player’s position in the queue.

// 	*Kindly use Javascript

function alertImpostor(queue) {
  // Assumption
  // 1. The player acting as the ghost is standing at the front of the queue (at the beginning of the array 
  //    (index 0)), but doesn't count as player.
  // 2. There will always be an Impostor in the queue and 
  //    the position of the impostor in the queue is marked with the word "Impostor."

  // Get the ghost's position (front of the queue)
  const ghostPosition = 0;

  // Find the position of the impostor in the queue
  const impostorPosition = queue.indexOf("Impostor");

  if (impostorPosition === ghostPosition) {
    return "Go away!, don't kill my friend!";
  } else {
    // Uses impostorPosition because index in array is already the N-1 th position (the front of impostor) 
    return `Hey, Player number ${impostorPosition}, RUNN!!! That impostor will kill you!`; 
  }
}

module.exports = { alertImpostor };