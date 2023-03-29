# 知识点
## 1. 图片格式
> PNG-8/PNG-24、jpeg、gif、svg、json、WebP、AVIF、JPEG XL
----
# HTML5

## 1. [<picture>](https://mp.weixin.qq.com/s/LZ86LkmGwmZMUFLCLjDa4g)
> <picture> 元素通过包含零或多个 <source> 元素和一个 <img> 元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子 <source> 元素，如果没有匹配的，就选择 <img> 元素的 src 属性中的 URL。然后，所选图像呈现在 <img> 元素占据的空间中。

````html
<picture>
  <!-- 可能是一些对兼容性有要求的，但是性能表现更好的现代图片格式-->
  <source src="image.avif" type="image/avif">
  <source src="image.jxl" type="image/jxl">
  <source src="image.webp" type="image/webp">
   <!-- 最终的兜底方案-->
  <img src="image.jpg" type="image/jpeg">
</picture>
````

