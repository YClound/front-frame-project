import React, { createContext, useContext, useState } from "react";

const countContext = createContext<{ count?: number; setCount?: React.Dispatch<React.SetStateAction<number>> }>({});

const Children = () => {
  const { count = 0, setCount } = useContext(countContext);
  return <div>
    <div>child count: {count}</div>
    <button onClick={() => { setCount && setCount(count + 1) }}>children click</button>
  </div>
}

const TestUseContext = () => {
  const [count, setCount] = useState(0);
  return <countContext.Provider value={{ count, setCount }}>
    <div>parent count: {count}</div>
    <button onClick={() => { setCount(count + 1) }}>click</button>
    <Children></Children>
  </countContext.Provider>
}

export default TestUseContext;