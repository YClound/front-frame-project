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
* DataViews：用来生成内存的视图，可以自定义格式和字节序。








# 区别
## 那 ArrayBuffer 与 Blob 有啥区别呢？
> 根据 ArrayBuffer 和 Blob 的特性，Blob 作为一个整体文件，适合用于传输；当需要对二进制数据进行操作时（比如要修改某一段数据时），就可以使用 ArrayBuffer。
