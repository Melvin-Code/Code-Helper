import React, { Component } from "react";
import Axios from "axios";
import cheerio from "cheerio";

class Searching extends Component {
  state = {
    query: "",
    // urlQuestion: "",
    // title: ""
    items: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.toggleSearch();
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      query: this.state.search
    });
    this.getQuestion();
  };
  getQuestion = () => {
    Axios.get(
      `https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${this.state.search}&site=stackoverflow`
    )
      .then(res => {
     
        this.props.travel(res.data.items);
        //   this.displaySearch(res.data.items[0].link, res.data.items[0].title);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
            name="search"
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Searching;
