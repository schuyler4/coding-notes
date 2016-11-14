import React, { Component } from 'react'
import Note from './Note'

/* this is the list that will display all the notes it
is also kind of the home */
class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onNote: false,
      editing: false
    }

    this.onGoBack = this.onGoBack.bind(this)
    this.onItemClick = this.onItemClick.bind(this)

    this.onChangeToEditing = this.onChangeToEditing.bind(this)
    this.onChangeToViewing = this.onChangeToViewing.bind(this)

    this.onDeletClick = this.onDeletClick.bind(this)
  }

  /* change the view to a note with the descripiton and code */
  onItemClick(title, descripiton, code, number) {
    this.setState(
      {
        onNote: true,
        title: title,
        descripiton: descripiton,
        code: code,
        number: number
      }
    )
  }

  /* go back to the list view if there viewing a specific note*/
  onGoBack() {
    this.setState(
      {
        onNote: false
      }
    )
  }

  /* change it so they can Delete */
  onChangeToEditing() {
    this.setState(
      {
        editing: true
      }
    )

    console.log("editing")
  }

  /* change to a specific note view */
  onChangeToViewing() {
    this.setState(
      {
        editing: false
      }
    )
  }

  /* delete a note when the user clicks the delete button while on edit mode */
  onDeletClick(number) {
    console.log('panda')
    console.log('should be deleteing ' + number)

    localStorage.removeItem('title' + number + 1)
    localStorage.removeItem('description' + number + 1)
    localStorage.removeItem('code' + number + 1)

    /*console.log(number)

    localStorage.setItem('number', number - 1)
    let newNumber = localStorage.getItem('number')

    console.log(newNumber)
    let maxNumber;

    for (let i = 0; i < number; i++) {

    }

    for (let i = 0; i < newNumber; i++) {
      let title = localStorage.getItem('title' + i)
      let description = localStorage.getItem('description' + i)
      let code = localStorage.getItem('code' + i)


      localStorage.setItem('title', )
    }*/
  }

  render() {
    if (!this.state.onNote) {

      const stringNumber = localStorage.getItem("number")
      const intNumber = parseInt(stringNumber, 10)

      let notes = []

      for (let i = 0; i < intNumber + 1; i++) {
        if(i !== 0) {

          const title = localStorage.getItem("title" + i)
          const description = localStorage.getItem("description" + i)
          const code = localStorage.getItem("code" + i)

          const note = {
            title: title,
            description: description,
            code: code
          }

          notes.push(note)

        }
      }

      if(!this.state.editing) {
        return (
          <div  >
            <h1>Notes</h1>
            <table>
              <tbody>
                {notes.map(function(note, index) {
                  return (
                    <tr key={index}>
                      <th key={index}>
                         <h3 key={index} onClick={() => {
                             console.log(index)
                             this.onItemClick(
                               note.title, note.description, note.code, index
                             )
                           }}>
                           {note.title}
                         </h3>
                      </th>
                    </tr>
                  )
                }, this)}
              </tbody>
            </table>
            <button onClick={this.onChangeToEditing}>Edit Notes</button>
          </div>
        )
      } else {
        /* some vary redundent code but I don't know how to make it better */
        return (
          <div>
            <h1>Notes</h1>
            <table>
              <tbody>
                {notes.map(function(note, index) {
                  return (
                    <tr key={index}>
                      <th key={index}>
                         <h3 key={index} onClick={() => {
                             this.onItemClick(
                               note.title, note.description, note.code, index
                             )
                           }}>
                           {note.title}
                         </h3>
                         <button onClick={() => {this.onDeletClick(index + 1)}}>
                           Delete
                         </button>
                      </th>
                    </tr>
                  )
                }, this)}
              </tbody>
            </table>
            <button onClick={this.onChangeToViewing}>Done</button>
          </div>
        )
      }

    } else {

      return (
        <div>
          <Note
            title={this.state.title}
            descripiton={this.state.descripiton}
            code={this.state.code}
            number={this.state.number}>
          </Note>
          <button onClick={this.onGoBack}>Go Back</button>
        </div>
      )
    }

  }
}

export default List
