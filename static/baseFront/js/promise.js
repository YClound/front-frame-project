function request(url, time = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('请求结束：' + url);
      if (Math.random() > 0.5) {
        resolve('成功',);
      } else {
        reject('错误;');
      }
    }, time * 1000)
  })
}

function sendRequest(requestList, limits, callback) {
  const promises = requestList.slice();
  const num = Math.min(limits, requestList.length);
  let count = 0;

  // 启动初次能执行的任务
  const runTaskNeeded = () => {
    let i = 0;
    if (i < num) {
      i++;
      runTask();
    }
  }

  // 取出任务并推送到执行器
  const runTask = () => {
    const task = promises.shift();
    task && runner(task);
  }

  // 执行器，这里去执行任务
  const runner = async (task) => {
    try {
      count++;
      const res = await task();

    } catch (error) {
      console.log(error, 'catch')
    } finally {
      console.log(count)
      count--;
      picker();
    }
  }

  // 捞起下一个任务
  const picker = () => {
    if (count < limits && promises.length) {
      runTask();
    } else if (promises.length === 0 && count === 0) {
      callback && callback();
    }
  }

  runTaskNeeded();
}

sendRequest(

  [() => request('1', 5),

  () => request('2', 2),

  () => request('3', 1),

  () => request('4', 5), () => request('5', 1), () => request('6', 1)],

  3, //并发数

  (res) => {

    console.log(res)

  })

