// import() 调用会在内部用到 promises。如果在旧版本浏览器中（例如，IE 11）使用 import()，记得使用一个 polyfill 库（例如 es6-promise 或 promise-polyfill），来 shim Promise。
function getComponent() {
  return import(/* webpackPrefetch: true */ 'lodash').then(({default: _}) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }).catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
})