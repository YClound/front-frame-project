// 检测是否为对象
const isObject = function isObject(obj) {
  return obj !== null && /^(object|function)$/.test(typeof obj);
};

// 对象浅比较的方法
const shallowEqual = function shallowEqual(objA, objB) {
  if (!isObject(objA) || !isObject(objB)) return false;
  if (objA === objB) return true;
  // 先比较成员的数量
  let keysA = Reflect.ownKeys(objA),
    keysB = Reflect.ownKeys(objB);
  if (keysA.length !== keysB.length) return false;
  // 数量一致，再逐一比较内部的成员「只比较第一级：浅比较」
  for (let i = 0; i < keysA.length; i++) {
    let key = keysA[i];
    // 如果一个对象中有这个成员，一个对象中没有；或者，都有这个成员，但是成员值不一样；都应该被判定为不相同！！
    if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) {
      return false;
    }
  }
  // 以上都处理完，发现没有不相同的成员，则认为两个对象是相等的
  return true;
};