import { useReducer } from "react";

const TestUseReducer = () => {
  const [count, dispatch] = useReducer((state: number, action: string) => {
    switch (action) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1
      default:
        return state;
    }
  }, 0)

  return <div>
    {count}
    <br />
    <button onClick={() => dispatch('add')}>+1</button>
    <br />
    <button onClick={() => dispatch('sub')}>-1</button>
  </div>
}

export default TestUseReducer;