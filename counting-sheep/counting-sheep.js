// https://code.google.com/codejam/contest/6254486/dashboard
const stream = require('fs').createReadStream(__dirname + '/input')
const readline = require('readline').createInterface({input: stream})
let c = 0
readline.on('line', line => {
  if (c !== 0) console.log(`Case #${c}: ${countSheep(parseInt(line))}`)
  c++
})

readline.on('close', () => {
  console.log('done')
})

const countSheep = (n) => {
  if (n === 0) return 'INSOMNIA'
  const numbers = '1234567890'.split('')
  let counter = 1
  let currentNumber
  while (numbers.length) {
    currentNumber = counter * n
    const currentNumbers = currentNumber.toString().split('')
    while (currentNumbers.length) {
      const numberToRemove = currentNumbers.shift()
      if (numbers.indexOf(numberToRemove) > -1) {
        numbers.splice(numbers.indexOf(numberToRemove), 1)
      }
    }
    counter++
  }
  return currentNumber
}
