import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavBar from './ComOfComp/Nav-Bar'
class VideoPage extends Component {
    render() {
        return (
            <div className='pages'>
               <NavBar/>
                This are My Videos
            </div>
        );
    }
}

export default VideoPage;