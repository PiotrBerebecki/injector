const grumpyCat = require('grumpy-cat')

const stdin = process.openStdin()

let data = ''

stdin.on('data', (chunk) => {
  chunk = chunk.toString()
  data += chunk
})

stdin.on('end', () => {
  var regEx = {
    tests: /#\stests\s+(\d+)/,
    pass: /#\spass\s+(\d+)/,
    fail: /#\sfail\s+(\d+)/
  }

  var tests = regEx['tests'].exec(data) ? regEx['tests'].exec(data)[1] : '0'
  var pass = regEx['pass'].exec(data) ? regEx['pass'].exec(data)[1] : '0'
  var fail = regEx['fail'].exec(data) ? (regEx['fail'].exec(data))[1] : '0'

  if (tests === pass) {
    grumpyCat()
    console.log('ALL TESTS PASS - YOU\'VE EARNT GRUMP CAT')
  }

  console.log('Number of Tests: ' + tests)
  console.log('Passed: ' + pass)
  console.log('Failed: ' + fail)
})
