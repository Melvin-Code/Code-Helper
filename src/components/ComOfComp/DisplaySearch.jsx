import React, { Component } from "react";
import SearchCards from './SearchCards'
import Cardnotes from "./card-notes";

class DisplaySearch extends Component {
  render() {
    console.log(this.props);
    // console.log(this.state);
    return (
      <div className="fixIt">
        {/* <Cardnotes title={this.props.title} content={this.props.question} /> */}
        {this.props.items.map((item, i) => (
          <SearchCards
            title={item.title}
            content={item.link}
            createNewNote={() => this.props.createNewNote(item)}
            // changeItem={this.props.changeItem}
          />
        ))}
      </div>
    );
  }
}

export default DisplaySearch;
