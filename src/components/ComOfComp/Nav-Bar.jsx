import React, { Component } from "react";
import { Link } from "react-router-dom";
import Searching from './Searching'
class NavBar extends Component {
  
  
  render() {
    console.log(this.state)
    return (
      <nav className="nav-bar">
        
        <img className="bar-icon" alt="is a logo" src="/Asset2.svg" />
        <Link to="/HomePage">Home</Link>
        <Searching travel={this.props.travel} toggleSearch={this.props.toggleSearch}/>
        <Link to="/WorkPage">Work Space</Link>
        <Link to="/VideoPage">Videos</Link>
      </nav>
    );
  }
}

export default NavBar;
