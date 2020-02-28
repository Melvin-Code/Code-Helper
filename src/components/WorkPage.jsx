import React, { Component } from "react";
import { Link } from "react-router-dom";
import Notes from "./ComOfComp/Notes";
import NavBar from "./ComOfComp/Nav-Bar";
import WorkFolders from "./ComOfComp/WorkFolder";
import Searching from "./ComOfComp/Searching";
import DisplaySearch from "./ComOfComp/DisplaySearch";
import Axios from "axios";

class WorkPage extends Component {
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

  // addSearch = item => {
  //   let noteCopy = [...this.state.items];
  //   noteCopy.push(item);
  //   this.setState({
  //     items: noteCopy
  //   });
  // };

  travel = items => {
    // console.log(title);
    this.setState({
      // title: title,
      // urlquestion: question
      items: items
    });
  };
  createNewNote = async item => {
    //create new folder with MONGOREST adn then set to state and pass down
  
    // this.addSearch(item);

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
    console.log(this.state);
    return (
      <div className="pages">
        <NavBar travel={this.travel} toggleSearch={this.toggleSearch} />
        <section className="page-organizer ">
          {/* <WorkFolders /> */}
          {this.state.search ? (
            <Notes rendering={this.props.rendering} notes={this.props.notes} {...this.props} />
          ) : (
            <DisplaySearch
              // question={this.state.urlquestion}
              // title={this.state.title}
              // changeItem={this.updateItemLink}
              createNewNote={this.createNewNote}
              items={this.state.items}
            />
          )}
          {/* <button className="editor">Edit</button> */}
        </section>
      </div>
    );
  }
}

export default WorkPage;
