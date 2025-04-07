
import React, { Component } from 'react'

class Greeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"please Subscribe"
      }
    }
    changeState()
    {
        this.setState({
            message:"Subscribed"
        })
    }
  render() {
    return (
      <div><h1>{this.state.message}</h1>
      <button onClick={()=>this.changeState()}>Subscribe</button>
      </div>

    )
  }
}

export default Greeting