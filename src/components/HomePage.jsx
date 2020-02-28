import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./ComOfComp/Nav-Bar";
import AllNotes from "./AllNotes";
class HomePage extends Component {
  render() {
    return (
      <div className="pages">
        <NavBar />
        <AllNotes
          notes={this.props.notes}
          rendering={this.props.rendering}
          propFunctionThatWillSetTheStateInApp={
            this.props.propFunctionThatWillSetTheStateInApp
          }
          addNewNotes={this.props.addNewNotes}
          {...this.props}
          // addSearch={this.addSearch}/>
        />
      </div>
    );
  }
}

export default HomePage;
