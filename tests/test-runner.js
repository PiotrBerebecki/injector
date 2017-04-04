const grumpyCat = require('grumpy-cat');

// Here is your server.test.js output
const testResultsStream = process.openStdin();

// This is a hint...
let testResults = '';

testResultsStream.on('data', (chunk) => {
  chunk = chunk.toString();
  testResults += chunk;
});

testResultsStream.on('end', () => {

  var testNum = (testResults.match(/tests\s+(\d+)/) || [])[1] || '0';
  var passNum = (testResults.match(/pass\s+(\d+)/) || [])[1] || '0';
  var failNum = (testResults.match(/fail\s+(\d+)/) || [])[1] || '0';

  // If all tests pass, grumpy cat makes an appearance
  if (testNum === passNum) {
    grumpyCat();
  }

  // Logging your results to the terminal
  console.log('Number of Tests: ' + testNum);
  console.log('Passed: ' + passNum);
  console.log('Failed: ' + failNum);
});
