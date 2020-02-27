import React, { Component } from "react";

class WorkFolder extends Component {
 state={
   displayForm: false
 }
 showForm=()=>{
   this.setState({
     displayForm:true
   })
 }
 
  render() {
    return (
      
        <div className="WfolderContainer">
          <button onClick={this.props.createNewFolder}>New Folder</button>
          <div className="separator">
            <h1 onChange={this.showForm} >Work Folders</h1>
            <ul >
              <li className='note-card'>React Folder</li>
              <li className='note-card'>JS Folder</li>
            </ul>
          </div>
          <hr className="line"></hr>
        </div>   
    );
  }
}

export default WorkFolder;
