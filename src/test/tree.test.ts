class treeNode {
  public value: any = ''
  public left: TreeNode | null
  public right: TreeNode | null

  constructor(value: any) {
    this.value = value
    this.left = null
    this.right = null
  }

  setLeft(left: any) {
    this.left = left
  }
  setRight(right: any) {
    this.right = right
  }
}

test('257', () => {
  var testFunc = function (nums: number[], n: number) {}

  let tree = new treeNode(1)
  tree.setLeft(new treeNode(2))
  tree.setRight(new treeNode(2))

  expect(testFunc()).toEqual(['1->2->5', '1->3'])
})
