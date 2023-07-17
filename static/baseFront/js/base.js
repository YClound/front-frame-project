const box = document.getElementById('box');
const rect = box?.getBoundingClientRect();
console.log(rect);

const style = window.getComputedStyle(box);
console.log(style, style.getPropertyValue('height'),style.getPropertyValue('width'), 'window.getComputedStyle');

const body = document.getElementsByTagName('body')[0];
const bodyItem = document.createNodeIterator(body);
let root = bodyItem.nextNode();

while (root) {
  console.log(root, root.nodeType);
  if (root.nodeType === 1) {
      root?.setAttribute('data-index', 123)//给每个节点添加一个属性
  }
  root = bodyItem.nextNode()
}