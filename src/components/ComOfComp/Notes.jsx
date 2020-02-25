import React, { Component } from "react";
import Cardnotes from "./card-notes";
import Searching from "./Searching";
import Axios from "axios";
class Notes extends Component {
  state = {
    takeNotes: []
  };
  pusher = () => {};
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    //copyOfTakeNotes.push({ contentOf: this.state.content });
    Axios.post("https://ironrest.herokuapp.com/Melvin", {
      // _id: Math.floor(Math.random()*3000),
      item: {
        title: this.state.title,
        link: this.state.content
      }
    }).then(res => {
      console.log(res.data, this.state.takeNotes);
      let copyOfTakeNotes = [...this.state.takeNotes];
      copyOfTakeNotes.push(res.data.ops[0]);
      console.log(copyOfTakeNotes);
      this.setState({
        takeNotes: copyOfTakeNotes
      });
    });
  };
  displayNote = () => {
    let copyOfNotes = [...this.state.takeNotes];
    // copyOfNotes.push({titleOf: this.props.title})
    // copyOfNotes.push({contentOf: this.props.question})
    // console.log(copyOfNotes);
    return copyOfNotes.map((each, key) => {
      return (
        <Cardnotes
          key={key}
          title={each.item.title}
          content={each.item.link}
          rendering={this.props.rendering}
          id={each._id}
          renderingNotes={this.renderingNotes}
        />
      );
    });
  };
  renderingNotes = id => {
    let copyOfNotes = [...this.state.takeNotes];
    copyOfNotes = copyOfNotes.filter(copyOfNotes => copyOfNotes._id !== id);
    this.setState({
      takeNotes: copyOfNotes
    });
    console.log("you just render");
  };
  DSaveNotes = () => {
    console.log(this.props);
    let copyOfNotes = this.props.notes;
    let listOfAll = [];
    return copyOfNotes.map((each, i) => {
      if (each.item) {
        console.log(each);
        return (
          <Cardnotes
            rendering={this.props.rendering}
            key={i}
            renderingNotes={this.renderingNotes}
            title={each.item.title}
            content={each.item.link}
            id={each._id}
          />
        );
      }
    });
    console.log(copyOfNotes);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.location.pathname !== "/HomePage" && (
          <div className="note-container fixIt3">
            <form className="freakingNote" onSubmit={this.handleSubmit}>
              <input
                className="barTitle"
                onChange={this.handleChange}
                placeholder=" Title"
                name="title"
                type="text"
              />
              <input
                className="barLink"
                onChange={this.handleChange}
                placeholder=" Link"
                name="content"
                type="text"
              />
              <input
                className="submit2"
                onChange={this.handleChange}
                type="submit"
              />
            </form>
          </div>
        )}
        <div className="fixIt2">
          <ul>
            {this.displayNote()}
            {this.DSaveNotes()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Notes;
