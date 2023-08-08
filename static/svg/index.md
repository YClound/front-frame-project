# svg(https://juejin.cn/post/7124312346947764260?searchId=202308011422540A11EF6EBBEF50719BE8#heading-30)

## 画弧形 A rx ry x-axis-rotation large-arc-flag sweep-flag x y 或者 a rx ry x-axis-rotation large-arc-flag sweep-flag x y
* x、ry分别为X轴的半径和Y轴的半径
* x-axis-rotation为弧度在X轴的旋转角度
* large-arc-flag决定弧线是大于还是小于180度，0表示小角度弧，1表示大角度弧
* sweep-flag为弧的方向，0表示从起点到终点沿逆时针画弧，1表示从起点到终点沿顺时针画弧
* x、y为弧形的终点

## textPath
> svg属性增加 xmlns:xlink="http://www.w3.org/1999/xlink" 显示文字路径
textPath标签可以利用它的xlink:href属性取得一个任意路径，并且可以让字符顺着路径渲染

## clipPath 剪裁
> 裁剪的功能主要是使用clipPath标签定义一条裁剪路径，然后用来裁剪掉元素的部分内容。且任何透明度的效果都是无效的，它只能要么裁剪掉要么不裁剪。

## mask 蒙层
> 蒙层的功能主要实现标签就是mask标签，他的功能和名字正好相反，他不是用来遮住元素的部分内容，而是用来显示元素中mask标签遮住的内容。 他和clipPath标签不同的是他允许使用透明度（透明度为0则无蒙层效果）和灰度值遮罩计算得的软边缘