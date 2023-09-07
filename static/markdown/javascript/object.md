## 1.冻结
冻结对象：Object.freeze(obj)
检测是否被冻结：Object.isFrozen(obj) =>true/false
被冻结的对象：

* 不能修改成员值
* 不能新增成员
* 不能删除现有成员
* 不能给成员做劫持「Object.defineProperty」

## 2.密封
密封对象：Object.seal(obj)
检测是否被密封：Object.isSealed(obj)

* 被密封的对象：可以修改成员的值，但也不能删、不能新增、不能劫持！！

## 3.扩展
把对象设置为不可扩展：Object.preventExtensions(obj)
检测是否可扩展：Object.isExtensible(obj)

* 被设置不可扩展的对象：除了不能新增成员、其余的操作都可以处理！！
* 被冻结的对象，即是不可扩展的，也是密封的！！同理，被密封的对象，也是不可扩展的！！