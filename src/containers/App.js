import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setName, setAge } from '../actions/action1';



class Input extends React.Component {
  constructor () {
    super();
    this.state = {
      value : ''
    }
    this._change = this._change.bind(this);
  }
  _change(event) {
    this.setState ({
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this._change} value={this.state.value} />
      </div>
    )
  }
}

class App extends React.Component {
  // constructor(props){
  // super(props);
  // 
  // }

  render() {
    return (
      <div>
        <div>
          {/*<Input ref="input"/>*/}
          <button onClick={() => { this.props.setName() }}>CHANGE THE NAME Usama</button>
          <button onClick={() => { this.props.setAge() }}>CHANGE THE NAME to Hanzala</button>
          <h1>{this.props.user.name}</h1>
          <h1>{this.props.user.age}</h1>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userName
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (name) => {
      dispatch(setAge());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



// export default App;
