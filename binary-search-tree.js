const { mergeSort } = require('./merge-sort')

// unsorted tree
const binaryTree = {
  v: 5,
  l: {
    v: 2,
    l: {
      v: 4
    },
    r: {
      v: 7
    }
  },
  r: {
    v: 3
  }
}

const dfs = (tree, target) => {
  tree && console.log(tree.v)
  return tree && (tree.v === target || dfs(tree.l, target) || dfs(tree.r, target))
}

const bfs = (tree, target) => {
  if (!tree) return false
  const q = [tree]

  while (q.length) {
    console.log(q)
    const node = q.shift()
    if (node.v === target) return true
    if (node.l) q.push(node.l)
    if (node.r) q.push(node.r)
  }

  return false
}

const sortTree = tree => {
  const arr = []
  const q = [tree]
  while (q.length) {
    const node = q.shift()
    if (node.l) q.push(node.l)
    if (node.r) q.push(node.r)
    arr.push(node.v)
  }
  const sortedArr = mergeSort(arr)

  // build binary tree from sorted array
  return buildTree(sortedArr)
}

const buildTree = arr => {
  if (arr.length === 0) return {}
  if (arr.length === 1) return {v: arr[0]}
  const tree = {}
  const middle = Math.floor(arr.length / 2)
  tree.v = arr[middle]
  arr.splice(middle, 1)
  const left = arr.length === 1 ? arr : arr.slice(0, Math.floor(arr.length / 2))
  const right = arr.slice(middle, arr.length)
  if (left.length) tree.l = buildTree(left)
  if (right.length) tree.r = buildTree(right)
  return tree
}

// binary search
const binarySearch = (tree, target) => {
  if (!tree) return false
  console.log('binary search', tree.v)
  if (tree.v === target) return true
  if (target < tree.v) return binarySearch(tree.l, target)
  if (target > tree.v) return binarySearch(tree.r, target)
}

console.log('dfs', 7, dfs(binaryTree, 7))
console.log('bfs', 7, bfs(binaryTree, 7))
console.log('sortTree', binaryTree, 'output', sortTree(binaryTree))
console.log('binarySearch', sortTree(binaryTree), 'output', binarySearch(sortTree(binaryTree), 7))
