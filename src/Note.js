import React, { Component } from 'react'

/* this is the Note view that will display the notes title descripiton and
code when it is clicked on from the list view */
class Note extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: "Viewing"
    }

    this.changeToEdit = this.changeToEdit.bind(this)
    this.changeToView = this.changeToView.bind(this)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCodeChange = this.handleCodeChange.bind(this)
  }

  changeToEdit() {
    this.setState(
      {
        mode: "Editing",
        titleValue: this.props.title,
        descriptionValue: this.props.descripiton,
        codeValue: this.props.code
      }
    )
  }

  /* handle all the changes */
  handleTitleChange(event) {
    this.setState({titleValue: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({descriptionValue: event.target.value})
  }

  handleCodeChange(event) {
    this.setState({codeValue: event.target.value})
  }

  /* save all the changes when they change of of editing */
  changeToView() {
    /* get the number so that it can be hanged and change the values */
    const number = this.props.number + 1

    localStorage.setItem("title" + number, this.state.titleValue)
    localStorage.setItem("description" + number, this.state.descriptionValue)
    localStorage.setItem("code" + number, this.state.codeValue)

    this.setState(
      {
        mode: "Viewing"
      }
    )
  }

  render() {
    if (this.state.mode === "Viewing") {

      return (
        <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.descripiton}</p>
          <code>{this.props.code}</code><br></br>
          <button onClick={this.changeToEdit}>Edit This Note</button>
        </div>
      )

    }
    else if (this.state.mode === "Editing") {
      return (
        <div>
          <input
            value={this.state.titleValue}
            onChange={this.handleTitleChange}>
          </input>
          <br></br>
          <textarea
            value={this.state.descriptionValue}
            onChange={this.handleDescriptionChange}>
          </textarea>
          <br></br>
          <textarea
            value={this.state.codeValue}
            onChange={this.handleCodeChange}>
          </textarea>
          <br></br>
          <button onClick={this.changeToView}>Done</button>
        </div>
      )
    }
  }
}

export default Note
