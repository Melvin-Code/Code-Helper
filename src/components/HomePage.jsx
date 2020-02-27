import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NavBar from './ComOfComp/Nav-Bar'
class HomePage extends Component {
    render() {
        return (
            <div className='pages'>
               <NavBar/>
                This is my Home
            </div>
        );
    }
}

export default HomePage;