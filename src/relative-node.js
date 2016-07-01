function getRelativeNode(targetTree, referenceNode) {
  const pathFromChildToRoot = [];
  let parentNode = referenceNode.parentNode;
  let index;
  while (parentNode) {
    index = Array.from(parentNode.children).indexOf(referenceNode);
    pathFromChildToRoot.push(index);
    referenceNode = parentNode;
    parentNode = referenceNode.parentNode;
  }

  let targetNode = targetTree;
  pathFromChildToRoot.reverse().forEach(index => {
    targetNode = Array.from(targetNode.children)[index];
  });

  return targetNode;
}

module.exports = getRelativeNode;
