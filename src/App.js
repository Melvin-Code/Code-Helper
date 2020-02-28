import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cheerio from "cheerio";
import Axios from "axios";
import WelcomePage from "./components/WelcomePage";
import WorkPage from "./components/WorkPage";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import AllNotes from "./components/AllNotes";

class App extends Component {
  state = {
    savedNotes: []
  };
  componentDidMount() {
    Axios.get("https://ironrest.herokuapp.com/Melvin").then(res => {
      console.log(res.data);
      this.setState({
        savedNotes: res.data
      });
    });

    Axios.post("https://ironrest.herokuapp.com/createCollection/Melvin").catch(
      err => {
        console.log(err);
      }
    );
  }
  addNewNotes = note => {
    console.log(this.state.savedNotes, note);
    let savedNotes = [...this.state.savedNotes];
    savedNotes.push(note);
    this.setState({ savedNotes });
  };
  rendering = id => {
    let copyNotes = [...this.state.savedNotes];
    copyNotes = copyNotes.filter(copyNotes => copyNotes._id !== id);
    this.setState({
      savedNotes: copyNotes
    });
    console.log(this.state.savedNotes);

    console.log("you just render");
  };

  propFunctionThatWillSetTheStateInApp = theNoteTheUserSaves => {
    console.log("calling the function in App.js");
    let copyOfSavedNotes = [...this.state.savedNotes];
    copyOfSavedNotes.push(theNoteTheUserSaves);
    this.setState({
      savedNotes: copyOfSavedNotes
    });
  };
  render() {
    console.log(this.state.savedNotes);
    return (
      <div>
        <Router>
          {this.state.urlText}

          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                render={props => <WelcomePage {...props} />}
              />
              <Route
                exact
                path="/homePage"
                render={props => <HomePage {...props} 
                notes={this.state.savedNotes}
                rendering={this.rendering}
                propFunctionThatWillSetTheStateInApp={
                  this.propFunctionThatWillSetTheStateInApp
                }
                addNewNotes={this.addNewNotes}

                // addSearch={this.addSearch}
                />}
              />
              <Route
                exact
                path="/WorkPage"
                render={props => (
                  <WorkPage
                    {...props}
                    rendering={this.rendering}
                    notes={this.state.savedNotes}
                    addNewNotes={this.addNewNotes}
                    // addSearch={this.addSearch}
                  />
                )}
              />
              <Route
                exact
                path="/VideoPage"
                render={props => <VideoPage {...props} />}
              />
              <Route
                exact
                path="/AllNotes"
                render={props => (
                  <AllNotes
                    {...props}
                    notes={this.state.savedNotes}
                    rendering={this.rendering}
                    propFunctionThatWillSetTheStateInApp={
                      this.propFunctionThatWillSetTheStateInApp
                    }
                    addNewNotes={this.addNewNotes}

                    // addSearch={this.addSearch}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

// @media all and (max-width:30em){
//    a.button1{
//     display:block;
//     margin:0.4em auto;
//    }
//   }
