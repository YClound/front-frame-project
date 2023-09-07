import React, { Component } from 'react'

// componentWillUnmount
// 首次渲染 UNSAFE_componentWillMount/getDerivedStateFromProps/render/componentDidMount
// 数据更新setState getDerivedStateFromProps/shouldComponentUpdate/render/getSnapshotBeforeUpdate/componentDidUpdate
export default class TestLifeCycle extends Component<{ firstName?: string; lastName?: string }, { count: number, totalName?: string; }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      count: 0,
      totalName: '',
    }

    this.setCount = this.setCount.bind(this);
    this.forceUpdateState = this.forceUpdateState.bind(this);
  }

  // 从 props 获取 衍生state。但在许多情况下，你的组件的 state 实际上是其 props 的衍生品。这个方法允许你用 任何props值 来修改 state 值。
  // 这个方法在组件挂载前调用，并且在组件每次更新时也会被调用。它的作用是根据 props 的改变来更新 state，返回一个 新的state。如果不需要更新 state，返回 null 即可。
  static getDerivedStateFromProps(props: any, state: any) {
    console.log('getDerivedStateFromProps', props, state)
    return {
      totalName: `${props.firstName}-${props.lastName}`
    }
  }

  // UNSAFE_componentWillMount() {
  //   // this.setState({ count: 50})
  //   console.log('UNSAFE_componentWillMount')
  // }

  // componentDidMount 是在挂载阶段调用的最后一个生命周期方法，组件被挂载后调用，这个方法可以用于发起网络请求或者设置定时器等异步操作。它可能在组件被渲染或挂载到DOM之后被调用
  componentDidMount() {
    console.log('componentDidMount')
  }

  // getSnapshotBeforeUpdate 方法让你可以访问组件更新前的 props 和 state。这使你能够处理或检查 props 和 state 的先前值
  // 如果 getSnapshotBeforeUpdate 方法返回任何东西，它将被传递给 componentDidUpdate 方法作为参数
  getSnapshotBeforeUpdate(prevProps:any, prevState: any) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return 'yanan.g055'
  }

  // shouldComponentUpdate 是专门用于性能优化的，
  // 通常来说，只有 props 或 state 变化时才需要再重新渲染。这个方法接受两个参数：nextProps 和 nextState，可以用于控制组件是否需要重新渲染，如果返回 false，组件将不会重新渲染，默认返回true。
  // 注意，当调用 forceUpdate() 时，shouldComponentUpdate 方法被忽略(render/getSnapshotBeforeUpdate/componentDidUpdate)。
  shouldComponentUpdate(nextPorps: any, nextState: any) {
    console.log('shouldComponentUpdate', nextPorps, nextState)
    // if (nextState.count < 5) {
    //   return false;
    // }
    return true
  }

  // componentDidUpdate 方法是在更新阶段调用的最后一个生命周期方法。组件更新后被调用，可以用于处理 DOM的更新 或者 发起网络请求 等异步操作。
  componentDidUpdate(prevProps:any, prevState: any, snapshot: string) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }

  // 当组件从DOM中移除时，就会进入到卸载阶段
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  setCount() {
    this.setState({ count: this.state.count + 1 })
  }

  forceUpdateState() {
    this.forceUpdate(() => {
      // this.setState({ totalName: '强制更新'})
    })
  }

  render(): React.ReactNode {
    console.log('testLifeCycle render')
    return <div>
      <h1>Counter</h1>
      <button onClick={this.setCount}>Click to add</button>
      <p>count: {this.state.count}</p>
      <p onClick={this.forceUpdateState}>totalName: {this.state.totalName}</p>
    </div>
  }
}