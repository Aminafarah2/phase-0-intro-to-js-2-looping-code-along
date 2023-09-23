// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki'];
const event = "celebration";

function writeCards(names, celebration) {
  const congratulatoryMessage = [];
  for (let i = 0; i < names.length; i++) {
    congratulatoryMessage.push(`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);
  }
  // Return the array of congratulatory messages after the loop
  return congratulatoryMessage;
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
