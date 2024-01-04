// 层序遍历
// 使用栈结构，迭代解法

function levelOrderTraverse(root) {
  let result = [], queue = [];
  if (!root) {
    return result;
  }
  queue.push(root);
  while (queue.length) {
    let currLength = queue.length;
    let currLevel = [];
    for (let i = 0; i < currLength; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(currLevel);
  }
  return result;
}