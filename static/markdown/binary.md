<!-- https://zhuanlan.zhihu.com/p/568915443 -->
# Blob
> Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。实际上，Blob 对象是包含有只读原始数据的类文件对象。简单来说，Blob 对象就是一个不可修改的二进制文件。
1. new Blob(array, options); 
  * array：由 ArrayBuffer、ArrayBufferView、Blob、DOMString 等对象构成的，将会被放进 Blob
  * options：可选的 BlobPropertyBag 字典，它可能会指定如下两个属性
    * type：默认值为 ""，表示将会被放入到 blob 中的数组内容的 MIME 类型。
    * endings：默认值为"transparent"，用于指定包含行结束符\n的字符串如何被写入，不常用。
2. MIME类型

| MIME 类型       | 文件扩展名 |
|-----------------|------------|
| text/plain      |纯文本文档    |
| text/html       |HTML文档     |
| text/css        |css文件      |
| text/javascript |javascript文件|
| application/xml | XML        |
| application/pdf | pdf        |
| application/json| json       |
| image/png       | png        |
| image/jpeg      | jpg        |
| image/gif       | gif        |
| image/svg+xml   | svg图片     |
| audio/mpeg      | mp3文件     |
| video/mpeg      | mp4文件     |

3. instanceOfBlob.slice([start [, end [, contentType]]]};
  * start：设置切片的起点，即切片开始位置。默认值为 0，这意味着切片应该从第一个字节开始；
  * end：设置切片的结束点，会对该位置之前的数据进行切片。默认值为blob.size；
  * contentType：设置新 blob 的 MIME 类型。如果省略 type，则默认为 blob 的原始值。
# File
文件（File）接口提供有关文件的信息，并允许网页中的 JavaScript 访问其内容。实际上，File 对象是特殊类型的 Blob，且可以用在任意的 Blob 类型的 context 中。Blob 的属性和方法都可以用于 File 对象。
> 注意：File 对象中只存在于浏览器环境中，在 Node.js 环境中不存在。

在 JavaScript 中，主要有两种方法来获取 File 对象：

* input元素上选择文件后返回的 FileList 对象；
* 文件拖放操作生成的 DataTransfer 对象；

### （1）input
每个 File 对象都包含文件的一些属性，这些属性都继承自 Blob 对象：
* lastModified：引用文件最后修改日期，为自1970年1月1日0:00以来的毫秒数；
* lastModifiedDate：引用文件的最后修改日期；
* name：引用文件的文件名；
* size：引用文件的文件大小；
* type：文件的媒体类型（MIME）；
* webkitRelativePath：文件的路径或 URL。
  
通常，我们在上传文件时，可以通过对比 size 属性来限制文件大小，通过对比 type 来限制上传文件的格式等。

### （2）文件拖放
> 另一种获取 File 对象的方式就是拖放 API，这个 API 很简单，就是将浏览器之外的文件拖到浏览器窗口中，并将它放在一个成为拖放区域的特殊区域中。拖放区域用于响应放置操作并从放置的项目中提取信息。这些是通过 ondrop 和 ondragover 两个 API 实现的。

# FileReader
FileReader 是一个异步 API，用于读取文件并提取其内容以供进一步使用。FileReader 可以将 Blob 读取为不同的格式。
> 注意：FileReader 仅用于以安全的方式从用户（远程）系统读取文件内容，不能用于从文件系统中按路径名简单地读取文件。

FileReader 对象提供了以下方法来加载文件：

* FileReader.readAsArrayBuffer()：读取指定 Blob 中的内容，完成之后，result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象；
* FileReader.readAsBinaryString()：读取指定 Blob 中的内容，完成之后，result 属性中将包含所读取文件的原始二进制数据；
* FileReader.readAsDataURL()：读取指定 Blob 中的内容，完成之后，result 属性中将包含一个data: URL 格式的 Base64 字符串以表示所读取文件的内容。
* FileReader.readAsText()：读取指定 Blob 中的内容，完成之后，result 属性中将包含一个字符串以表示所读取的文件内容。

FileReader 对象常用的事件如下：

* abort：该事件在读取操作被中断时触发；
* error：该事件在读取操作发生错误时触发；
* load：该事件在读取操作完成时触发；
* progress：该事件在读取 Blob 时触发。
  
# ArrayBuffer
ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。ArrayBuffer 的内容不能直接操作，只能通过 DataView 对象或 TypedArrray 对象来访问。这些对象用于读取和写入缓冲区内容。

ArrayBuffer 本身就是一个黑盒，不能直接读写所存储的数据，需要借助以下视图对象来读写：

* TypedArray：用来生成内存的视图，通过9个构造函数，可以生成9种数据格式的视图。
  |元素	|类型化数组	|字节	|描述|
  |---|---|---|---|
  |Int8|Int8Array	|1|8|位有符号整数|
  |Uint8|Uint8Array|1|8 |位无符号整数|
  |Uint8C|Uint8ClampedArray|1|8|位无符号整数|
  |Int16|Int16Array|2|16|位有符号整数|
  |Uint16|Uint16Array|2|16|位无符号整数|
  |Int32|Int32Array|4|32|位有符号整数|
  |Uint32|Uint32Array|4|32|位无符号整数|
  |Float32|Float32Array|4|32|位浮点|
  |Float64|Float64Array|8|64|位浮点|
* DataViews：用来生成内存的视图，可以自定义格式和字节序。
  > new DataView(buffer [, byteOffset [, byteLength]])
  * getInt8：读取1个字节，返回一个8位整数。
  * getUint8：读取1个字节，返回一个无符号的8位整数。
  * getInt16：读取2个字节，返回一个16位整数。
  * getUint16：读取2个字节，返回一个无符号的16位整数。
  * getInt32：读取4个字节，返回一个32位整数。
  * getUint32：读取4个字节，返回一个无符号的32位整数。
  * getFloat32：读取4个字节，返回一个32位浮点数。
  * getFloat64：读取8个字节，返回一个64位浮点数。

1. ArrayBuffer.prototype.byteLength
  > 只读属性，表示 ArrayBuffer 的 byte 的大小
1. ArrayBuffer.prototype.slice
  > 来截取 ArrayBuffer 实例，它返回一个新的 ArrayBuffer
1. ArrayBuffer.isView()
  > 用来判断参数是否是 TypedArray 实例或者 DataView 实例

# Object URL
Object URL（MDN定义名称）又称Blob URL（W3C定义名称），是HTML5中的新标准。它是一个用来表示File Object 或Blob Object 的URL。

对于 Blob/File 对象，可以使用 URL构造函数的 createObjectURL() 方法创建将给出的对象的 URL。这个 URL 对象表示指定的 File 对象或 Blob 对象。我们可以在img、script 标签中或者 a 和 link 标签的 href 属性中使用这个 URL。

可以将Blob/File对象转化为URL，通过这个URL 就可以实现文件下载或者图片显示等。

当我们使用createObjectURL()方法创建一个data URL 时，就需要使用revokeObjectURL()方法从内存中清除它来释放内存。虽然浏览器会在文档卸载时自动释放 Data URL，但为了提高性能，我们应该使用createObjectURL()来手动释放它。revokeObjectURL()方法接受一个Data URL 作为其参数，返回undefined

# Base64
* atob()：解码，解码一个 Base64 字符串；
* btoa()：编码，从一个字符串或者二进制数据编码一个 Base64 字符串。

# 格式转换
1. ArrayBuffer → blob
````
const blob = new Blob([new Uint8Array(buffer, byteOffset, length)]);
````
1. ArrayBuffer → base64
````
const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
````
1. base64 → blob
````
const base64toBlob = (base64Data, contentType, sliceSize) => {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}
````
4. blob → ArrayBuffer
````
function blobToArrayBuffer(blob) { 
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject;
    reader.readAsArrayBuffer(blob);
  });
}
````
5. blob → base64
````
function blobToBase64(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
````
6. blob → Object URL
````
const objectUrl = URL.createObjectURL(blob);
````





# 区别
## 那 ArrayBuffer 与 Blob 有啥区别呢？
> 根据 ArrayBuffer 和 Blob 的特性，Blob 作为一个整体文件，适合用于传输；当需要对二进制数据进行操作时（比如要修改某一段数据时），就可以使用 ArrayBuffer。
