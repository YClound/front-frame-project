[webpack](https://webpack.docschina.org/guides/getting-started)
> 运行 webpack 5 的 Node.js 最低版本是 10.13.0 (LTS)。

> ## Webpack 四个核心概念

### complier

```javascript
hooks = {
    hooks.beforeRun: [NodeEnvironmentPlugin]
    hooks.thisCompilation,
    hooks.emit
}
```

### compilation

```javascript
hooks.contentHash
hooks.additionalAssets
chunkTemplate: {
    hooks.renderManifest,
    hooks.hashForChunk,
},
mainTemplate: {
    hooks.localVars,
    hooks.requireEnsure
}
```

#### entry（入口）

#### output（输出）

#### loader（解析）

#### plugins（插件）

## Gulp

## Bower

## Grunt

