// https://code.google.com/codejam/contest/619102/dashboard#s=p0
const fs = require('fs')
const file = fs.readFileSync(__dirname + '/input', 'utf-8')
const lines = file.split('\n')
let l = 0
const total = lines[l]
for (let T = 1; T <= total; T++) {
  l++
  let N = lines[l]
  const wires = []
  while (N--) {
    l++
    const coordinates = lines[l].split(' ')
    wires.push({l: parseInt(coordinates[0]), r: parseInt(coordinates[1])})
  }
  console.log(`Case #${T}: `, findIntersections(wires))
}

function findIntersections (wires) {
  let intersections = 0
  for (let i = 0; i < wires.length; i++) {
    const leftWire = wires[i]
    for (let j = 0; j < wires.length; j++) {
      if (i !== j) {
        const rightWire = wires[j]
        if (leftWire.l > rightWire.l && leftWire.r < rightWire.r) {
          intersections++
        }
      }
    }
  }
  return intersections
}
