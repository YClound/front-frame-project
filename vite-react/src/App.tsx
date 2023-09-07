import TestUseState from './base/TestUseState';
import TestLifeCycle from './base/TestLifeCycle';
import TestFunLifeCycle from './base/TestFunLifeCycle';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('App useEffect')

    return () => {
      console.log('App useEffect return')
    }
  }, [])

  console.log('APP render')

  return <>
    {/* <TestUseState/> */}
    {/* <TestLifeCycle firstName='顾亚南' lastName='guyanan' /> */}
    <TestFunLifeCycle />
  </>
}

export default App
