import React, { Component } from "react";
import Axios from "axios";
import NavBar from "./ComOfComp/Nav-Bar";
import Notes from "./ComOfComp/Notes";
import Cardnotes from "./ComOfComp/card-notes";
import DisplaySearch from "./ComOfComp/DisplaySearch";

class AllNotes extends Component {
  state = {
    // title: "",
    // urlquestion: "",
    items: [],
    search: true
  };
  toggleSearch = () => {
    this.setState({
      search: false
    });
  };
 
  travel = items => {
    // console.log(title);
    this.setState({
      // title: title,
      // urlquestion: question
      items: items
    });
  };
  createNewNote = async item => {
    

    this.setState({
      search: true
    });
   await Axios.post(`https://ironrest.herokuapp.com/Melvin`, {
      name: "doggy",
      item: item
    }).then(res => {
      console.log(res.data);
      //this.props.history.push(`/folder/${res.data.insertedId}`);
      //this.props.history.push(`/allNotes`);
      this.props.addNewNotes(res.data.ops[0])
    });
    // window.location.reload(true);
  };

  render() {
    return (
      <div className="pages">
        <NavBar travel={this.travel} toggleSearch={this.toggleSearch} />
        {this.state.search ? (
          <Notes rendering={this.props.rendering} notes={this.props.notes} />
        ) : (
          <DisplaySearch
            // question={this.state.urlquestion}
            // title={this.state.title}
            // changeItem={this.updateItemLink}
            createNewNote={this.createNewNote}
            items={this.state.items}
          />
        )}
      </div>
    );
  }
}

export default AllNotes;
