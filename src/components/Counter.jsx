import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {//rcont for constructor
      super(props)
    
      this.state = {
         count:0
      }
    }
   
    increment()
    {
        this.setState({
            count: this.state.count+1
        })
    }
    decrement()
    {
        this.setState({
            count: this.state.count-1
        })
    }
  render() {
    return (
      <div>{this.state.count}
      <button onClick={()=>this.increment()}>increment</button>
      <button onClick={()=>this.decrement()}>decrement</button>
      </div>
    )
  }
}

export default Counter

