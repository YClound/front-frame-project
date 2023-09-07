import React, { useEffect, useRef, useState } from "react";

const Child = () => {
  console.log('%c child render start', 'color: green')

  useEffect(() => {
    console.log('%c child effect []', 'color: green')

    return () => {
      console.log('%c child effect cleanup []', 'color: green')
    }
  }, [])

  console.log('%c child render end', 'color: green')
  return <p>child</p>
}

const TestFunLifeCycle = () => {
  const [shouldRenderChild, setShouldRenderChild] = useState(() => {
    console.log('%c useState', 'color: blue')
    return false
  })
  const domRef = useRef(null);

  console.log('%c parent render start', 'color: blue')

  useEffect(() => {
    console.log('%c parent effect []', 'color: blue', domRef);

    return () => {
      console.log('%c parent effect cleanup []', 'color: blue');
    }
  }, [])

  useEffect(() => {
    console.log('%c parent shouldRenderChild effect []', 'color: blue');

    return () => {
      console.log('%c parent shouldRenderChild effect cleanup []', 'color: blue');
    }
  }, [shouldRenderChild])

  console.log('%c parent render end', 'color: blue')

  return <div>
    <button onClick={() => { setShouldRenderChild(prev => !prev) }}> should render child?</button>
    {shouldRenderChild ? <Child /> : null}
    <div ref={domRef}>22222</div>
  </div>
}

export default TestFunLifeCycle;