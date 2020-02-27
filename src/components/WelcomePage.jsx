import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class WelcomePage extends Component {
    render() {
        return (
            <div className='WelcomePage'>
                
                <Link to='homePage'><a  className='btn'>
                <i className="fas fa-home"/>
                 </a></Link>
                 <img className='LogoWP'src="/Asset2.svg"/>
                 <div className='takeMeToSearch'>
                 <Link   to='workPage'><button className='btn2' ><i className="fas fa-search"></i></button></Link>
                 </div>
                 {/* <form>
                    <input type='text' placeholder='Search' />
                    <input type='submit'/>
                </form> */}
            </div>
        );
    }
}

export default WelcomePage;