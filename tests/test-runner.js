const grumpyCat = require('grumpy-cat')

// Here is your server.test.js output
const testResultsStream = process.openStdin()

// This is a hint...
let testResults = ''

/** write your test runner here **/


// If all tests pass, grumpy cat makes an appearance
if (tests === passed) {
  grumpyCat()
}

// Logging your results to the terminal
console.log('Number of Tests: ' + tests)
console.log('Passed: ' + pass)
console.log('Failed: ' + fail)
