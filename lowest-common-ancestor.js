const tree = {
  v: 5,
  l: {
    v: 3,
    l: {
      v: 7
    },
    r: {
      v: 8
    }
  },
  r: {
    v: 10,
    l: {
      v: 2,
      l: {
        v: 30
      }
    }
  }
}

const lowestCommonAncestor = (tree, num1, num2) => {
  if (!tree) return null
  if (tree.v === num1 || tree.v === num2) return tree.v
  const left = lowestCommonAncestor(tree.l, num1, num2)
  const right = lowestCommonAncestor(tree.r, num1, num2)
  if (left && right) return tree.v
  return left || right
}

console.log('7, 8 ->', lowestCommonAncestor(tree, 7, 8))
console.log('7, 2 ->', lowestCommonAncestor(tree, 7, 2))
console.log('10, 30 ->', lowestCommonAncestor(tree, 10, 30))
console.log('5, 7 ->', lowestCommonAncestor(tree, 5, 7))
