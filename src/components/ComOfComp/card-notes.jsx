import React, { Component } from "react";
import Axios from "axios";

class Cardnotes extends Component {

    deleteCards = (id) => {
        console.log(this.props)
        console.log(id)
        console.log('deleting')
        Axios.delete(`https://ironrest.herokuapp.com/Melvin/${id}`).catch(err => console.log(err))
        this.props.rendering(id)
    }
  render() {
      console.log(this.props)
    return (
      <li className="note-card">
        <h2>{this.props.title}</h2>
        <p contentEditable="false" ><a className='link' href={this.props.content}>{this.props.content}</a></p>
        <button onClick={()=> this.deleteCards(this.props.id)} className="close-btn">Delete</button>
        {/* <button onClick={() => this.props.deleteFuncFromApp.js(this.props.id)}>delete</button>
        <button onClick={() => this.funcyouwillcreate(this.props.id)}></button> */}
        {/* <button onClick={this.props.createNewNote}>Save</button> */}
      </li>
    );
  }
}

export default Cardnotes;
