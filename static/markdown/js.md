
# 坑
- 小数进行 加减乘除 会造成失精
- 字符串比较大小 和 数值比较大小的区别

# 函数柯里化

# 第三章
## 一. 基本类型转换

### 1. typeof 操作符
````
typeof null // object
typeof '111111' // string
typeof 12 // number
typeof false // boolean
typeof undefined // undefined
````

### 2. Boolean
````
// 布尔值转换
Boolean(NaN)  // false
Boolean(Infinity) // true
````

### 3. Number
````
// 极大值 极小值表示
3.125e7 // 3.127 * 10^7 = 31250000

// 最大值 最小值
Number.MIN_VALUE // 5e-324
Number.MAX_VALUE // 1.7976931348623157e+308

Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_SAFE_INTEGER // -9007199254740991

// 数值是否有穷的
Infinity、 -Infinity // 正负无穷
Number.NEGATIVE_INFINITY // -Infinity
Number.POSITIVE_INFINITY  // Infinity

isFinite(Number.MIN_VALUE + Number.MIN_VALUE) // false
````

* NaN - 非数值

````
// NaN 非数值 isNaN()
2/0  // Infinity
-2/0  // -Infinity
NaN/10 // NaN
NaN == NaN  // false
!NaN // true

isNaN('aaaaa')  // true  任何不能被转换为数值的值 isNaN()返回true
````

* Number() 转型函数Number()可以用于任何数据类型
````
// 数值转换 
NUmber('aaaaa') // NaN
Number({a: 0}) // NaN
Number(undefined) // NaN
Number('222aaa') // NaN

Number(null) // 0
Number(false) // 0

Number(true) // 1
Number(Infinity) // Infinity

// 十六进制
Number('0xf')  // 15
````

* parseInt() 取整 转换字符串
````
parseInt("");    // NaN

parseInt('11.8')  // 11
parseInt("1234blue")    // 1234

var num1 = parseInt("10", 2);      //2  （按二进制解析）
var num2 = parseInt("10", 8);      //8  （按八进制解析）
var num3 = parseInt("10", 10);     //10 （按十进制解析）
var num4 = parseInt("10", 16);     //16 （按十六进制解析）
````

* parseFloat() 只解析十进制值

````
var num1 = parseFloat("1234blue");          //1234 （整数）
var num2 = parseFloat("0xA");               //0
var num4 = parseFloat("22.34.5");           //22.34 
var num5 = parseFloat("0908.5");            //908.5 
var num6 = parseFloat("3.125e7");           //31250000 
````

### 4. String 字符串
* 1. 字符字面量
````
\xnn    以十六进制代码nn表示的一个字符（其中n为0～F）。例如，\x41表示"A"
\unnnn  以十六进制代码nnnn表示的一个Unicode字符（其中n为0～F）。例如，\u03a3表示希腊字符Σ
````

* 2. toString()- null和undefined值没有这个方法
* 3. String() - 将任何类型的值转换为字符串
````
String(null)  // "null"
String(undefined)  // "undefined"
````

### 5. Object 对象
* Object的每个实例都具有下列属性和方法

|属性/方法|用处|
|--|--|
|constructor|保存着用于创建当前对象的函数 构造函数|
|hasOwnProperty(propertyName)| 用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在|
|isPrototypeOf(object)|用于检查传入的对象是否是传入对象的原型|
|propertyIsEnumerable(propertyName)|用于检查给定的属性是否能够使用for-in语句（本章后面将会讨论）来枚举|
|toLocaleString|返回对象的字符串表示，该字符串与执行环境的地区对应|
|toString()|返回对象的字符串表示。|
|valueOf()|返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。|

## 二. 操作符
### 1. 一元操作符
* ++、-- 递增递减
* +、- 可用于转换数据类型
### 2. 位操作符
* ~  - 按位非(NOT)
* |  - 按位或(OR)
* &  - 按位与（AND)
* ^  - 按位异或(XOR)
* 左移 - (<<)
````
var oldValue = 2;   // 等于二进制的10 
var newValue = oldValue << 5;    // 等于二进制的1000000，十进制的64
````
* 有符号的右移 - (>>)
````
var value = -64; value >> 5   // -2
var value = 64; value >> 5   // 2
````

* 无符号右移 - (>>>)
````
var value = -64; value >>> 5   // 134217726
var value = 64; value >> 5   // 2
````
### 3. 乘性操作符
如果有一个操作数是NaN，则结果是NaN；
* 1. \* 乘法
````
NaN * NaN  // NaN
NaN * 12  // NaN
Infinity * 0  // NaN

Infinity * Infinity // Infinity
````
* 2. \\ 除法
````
任何数 除以 0 == Infinity

Infinity / Infinity = NaN
2 / Infinity = 0
````
* 3. 求模（余数） %

# 数组
### 1. Array.isArray(value)方法 -- 判断是否是数组
### 2. alert() -- 接收字符串参数，所以它会在后台调用 toString()方法
### 3. join() -- 数组转为字符串
* 如果数组中的某一项的值是 null 或者 undefined，那么该值在 join()、 toLocaleString()、toString()和 valueOf()方法返回的结果中以空字符串表示
### 4. push、pop 和 unshift、shift
* push、unshift 返回数组长度
* pop、shift 返回删除的数组项
### 5. reverse()、sort() 排序 - 改变原数组
#### (1). sort() -- 调用每个数组项的 toString()转型方法，然后比较得到的字符串
* 如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等 则返回0，如果第一个参数应该位于第二个之后则返回一个正数
### 6. concat()、slice() -- 不改变原数组 返回新的数组
* slice() -- 返回起始和结束位置之间的项，但不包括结束位置的项
### splice() -- 向数组中删除、插入、替换元素 改变元素组
* 返回一个数组，该数组中包含从原始数组中删除的项
````
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); alert(colors); // green,blue alert(removed); // red，返回的数组中只包含一项

removed = colors.splice(1, 0, "yellow", "orange"); alert(colors); // green,yellow,orange,blue alert(removed); // 返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple"); alert(colors); // green,red,purple,orange,blue alert(removed); // yellow，返回的数组中只包含一项
// 删除第一项
// 从位置 1 开始插入两项
// 插入两项，删除一项
````
### 7. indexOf()、lastIndexOf()
### 8. 迭代方法 -- every、filter、forEach、some、map 不会修改数组中的包含的值
#### (1) every -- 对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true
#### (2) some -- 对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。
#### (3) filter -- 对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
#### (4) forEach -- 对数组中的每一项运行给定函数。这个方法没有返回值。
#### (5) map -- 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
### 9. 归并方法 -- reduce、reduceRight
````
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
alert(sum); //15
````

# try Catch
````
try{
  try{
    console.log('try')
    throw new Error('test')
  }catch(error) {
    console.log(error.message, 'catch inner')
    throw new Error('test inner')
  }finally {
    console.log('finally')
  }
}catch(error) {
  console.log(error.message, 'catch outer')
}

// 输出顺序
// try 
// test catch inner 
// finally
// test inner catch outer
````
````
try{
  try{
    console.log('try')
    throw new Error('test')
  }finally {
    console.log('finally')
  }
}catch(error) {
  console.log(error.message, 'catch outer')
}

// 输出顺序
// try
// finally
// test catch outer
````