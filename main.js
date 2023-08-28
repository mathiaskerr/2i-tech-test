const readline = require('readline');

// Create an interface to read from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Enter something: ', (input) => {
  console.log(`You entered: ${input}`);
  // Close the interface when done
  rl.close();
});
