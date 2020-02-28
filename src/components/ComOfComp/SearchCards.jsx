import React, { Component } from "react";

import Axios from "axios";

class SearchCards extends Component {
  // deleteCards = (id) => {
  //     console.log(this.props)
  //     Axios.delete(`https://ironrest.herokuapp.com/Melvin/${id}`).catch(err => console.log(err))
  //     this.props.rendering(id)
  // }
  render() {
    console.log(this.props);
    return (
      <li className="note-card">
        <h2>{this.props.title}</h2>
        <p contentEditable="false">
          <a className="link">{this.props.content}</a>
        </p>
        {/* <div onClick={()=> this.deleteCards(this.props.id)} className="close-btn">&times;</div> */}
        {/* <button onClick={() => this.props.deleteFuncFromApp.js(this.props.id)}>delete</button>
        <button onClick={() => this.funcyouwillcreate(this.props.id)}></button> */}
        <button className="saving" onClick={this.props.createNewNote}>
          Save
        </button>
        <a className="linking" target="blank" href={this.props.content}>
          Link
        </a>
      </li>
    );
  }
}

export default SearchCards;
