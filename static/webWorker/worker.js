let i = 1;

function simpleCount() {
  i++;
  self.postMessage(i); // worker线程往主线程发消息
  setTimeout(simpleCount, 1000);
}

simpleCount();

// 接收主线程消息
self.onmessage = evt => {
  postMessage(evt.data + '呵呵~'); // worker线程往主线程发消息
}