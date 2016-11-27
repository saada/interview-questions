const mergeSort = arr => {
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const l = Object.assign([], left)
  const r = Object.assign([], right)
  const result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }
  console.log('merge', l, r, '->', result)
  return result
}

let input

input = [1]
console.log('mergeSort', 'input', input, 'output', mergeSort(input))

input = [1, 2]
console.log('mergeSort', 'input', input, 'output', mergeSort(input))

input = [2, 1]
console.log('mergeSort', 'input', input, 'output', mergeSort(input))

input = [7, 3, 4]
console.log('mergeSort', 'input', input, 'output', mergeSort(input))

input = [7, 3, 4, 10, 8, 3, 15, 1]
console.log('mergeSort', 'input', input, 'output', mergeSort(input))

module.exports = {
  mergeSort
}
