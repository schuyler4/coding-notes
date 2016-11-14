import React, { Component } from 'react'

/* this is where the notes are created there are fields for tile of the note
descripiton of the note and code of the note  */
class Create extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleValue:'',
      descriptionValue:'',
      codeValue:''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /* handle all the changes for all the text fields*/

  handleTitleChange(event) {
    this.setState({titleValue: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({descriptionValue: event.target.value})
  }

  handleCodeChange(event) {
    this.setState({codeValue: event.target.value})
  }

  handleSubmit(event) {
    if (this.state.titleValue !== '' && this.state.descriptionValue !== ''
      && this.state.codeValue !== '') {

      const data = {
        title: this.state.titleValue,
        description: this.state.descriptionValue,
        code: this.state.codeValue
      }

      /* save values in javascript local value */
      /* this is an incredibly bad way of doing but json parse array is not
      working so this seemed to be the only option */
      if(localStorage.number) {

        const stringNumber = localStorage.getItem("number")
        const intNumber = parseInt(stringNumber, 10)
        const nextNumber = intNumber + 1

        localStorage.setItem("title" + nextNumber, data.title)
        localStorage.setItem("description" + nextNumber, data.description)
        localStorage.setItem("code" + nextNumber, data.code)
        localStorage.setItem("number", nextNumber)

      } else {

        localStorage.setItem("title1", data.title)
        localStorage.setItem("description1", data.description)
        localStorage.setItem("code1", data.code)
        localStorage.setItem("number", 1)

      }

    }

  }

  render() {
    /* some styleing stuff may put it somewere else */

    const standardMargin = 5
    const standardWidth = 300

    const headingStyle = {
      margin: standardMargin
    }

    const titleStyle = {
      margin: standardMargin,
      width: standardWidth,
      borderColor: "gray",
      borderWidth: 1
    }

    const descriptionStyle = {
      margin: standardMargin,
      width: standardWidth,
      height: 100,
      borderColor: "gray"
    }

    const codeStyle = {
      margin: standardMargin,
      width: 300,
      height: 200,
      borderColor: "gray"
    }

    const buttonStyle = {
      margin: standardMargin
    }

    return (
      <div>
        <h1 style={headingStyle}>Create A Note</h1>
        <input
          placeholder="title"
          style={titleStyle}
          value={this.state.titleValue}
          onChange={this.handleTitleChange}>
        </input><br></br>
        <textarea
          placeholder="description"
          style={descriptionStyle}
          value={this.state.descriptionValue}
          onChange={this.handleDescriptionChange}>
        </textarea><br></br>
        <textarea
          style={codeStyle}
          placeholder="code"
          value={this.state.codeValue}
          onChange={this.handleCodeChange}>
        </textarea>
        <br></br>
        <button
          style={buttonStyle}
          onClick={this.handleSubmit}>
          Save
        </button>
      </div>
    )
  }
}

export default Create
