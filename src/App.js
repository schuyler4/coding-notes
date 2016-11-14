import React, { Component } from 'react'
import List from './List'
import Create from './Create'

/* this is the main app that will dispaly the current view and handle
switching them */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentView: "List"};

    this.changeToCreate = this.changeToCreate.bind(this)
    this.changeToList = this.changeToList.bind(this)
  }

  changeToCreate(event) {
    this.setState({currentView : "Create"})
  }

  changeToList(event) {
    this.setState({currentView: "List"})
  }

  render() {
    const buttonStyle = {
      margin: 5
    }

    if(this.state.currentView === "List") {
      return  (
        <div>
          <List></List>
          <button onClick={this.changeToCreate} style={buttonStyle}>
            Create A Note
          </button>
        </div>
      )

    } else if(this.state.currentView === "Create") {
      return (
        <div>
          <Create></Create>
          <button onClick={this.changeToList} style={buttonStyle}>
            Go Back
          </button>
        </div>
      )

    }
  }

}

export default App
