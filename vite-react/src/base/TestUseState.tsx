import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const TestUseState = () => {
  const [count, setCount] = useState(0);
  const domRef = useRef<HTMLDivElement>(null);

  console.log('界面更新')

  // setState()异步/批量更新: setState()的「异步执行」意味着在 setState()后面的代码是在新一轮界面更新流程（render -> commit）之前执行的。在后面的代码中无法访问到最新的组件状态和最新的 DOM 数据；「批量执行」意味着连续的多个setState()调用只会被压缩成一个setState()调用，最终只会触发一次的界面更新流程（在不考虑更新优先级的情况下）。
  // const handleClick = () => {
  //   setCount(cur => cur + 1)
  //   console.log('cur1:', count, domRef.current?.innerText)
  //   setCount(cur => cur + 2)
  //   console.log('cur3:', count, domRef.current?.innerText)
  // }

  // setState()同步/非批量执行: setState()的「同步执行」意味着 setState()调用后面的代码是真真正正在新一轮界面更新流程之后执行的。在后面的代码中，我们可以访问到最新的组件状态和最新的 DOM 数据；「非批量执行」意味着有多少个flushSync()调用就会产生多少次界面更新流程。
  const handleClick = () => {
    flushSync(() => {
      setCount(cur => cur + 1)
    })
    console.log('cur1:', count, domRef.current?.innerText)

    flushSync(() => {
      setCount(cur => cur + 2)
    })
    console.log('cur3:', count, domRef.current?.innerText)
  }

  return <div onClick={handleClick} ref={domRef}>
    current: {count}
  </div>
}

export default TestUseState;