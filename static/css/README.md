# 相关文章

1.  [vh 存在问题？试试动态视口单位之 dvh、svh、lvh](https://mp.weixin.qq.com/s/pCSCQ2GwMEUjc3SS1iSZzQ)

***

# 知识点

## 1. 盒模型

> IE盒模型、W3C盒模型。content-box，顾名思义，即width就是内容宽度，和边框边距相互独立，反过来 border-box 就是宽度包含了padding和border，相互影响。

## 2. 混合模式

> mix-blend-mode: multiply

## 提升渲染性能
* content-visibility
* contain-intrinsic-size

## gradient-渐变

## 函数
* clamp()
* has()

## 容器查询
* @container


## text-orientation
> 指定内容行中字符的方向。它仅适用于内容的垂直模式。此属性不影响水平书写模式的元素。mixed、sideways、upright、sideways-right 和 use-glyph-orientation

## writing-mode
> 定义了文本在水平或垂直方向上如何排布: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr
* horizontal-tb：水平方向自上而下的书写方式。即 left-right-top-bottom
* vertical-rl：垂直方向自右而左的书写方式。即 top-bottom-right-left
* vertical-lr：垂直方向内内容从上到下，水平方向从左到右
* sideways-rl：内容垂直方向从上到下排列
* sideways-lr：内容垂直方向从下到上排列