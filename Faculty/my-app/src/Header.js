import React from 'react';
import logo from './logo.png';

class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="Header-Site-Title">
                        <img className='Headeer-logo' src={logo} alt='nsut logo'/>
                        <div className="Department-Name">
                            <h1 >
                                <b>Department Of Computer Science And Engineering</b>
                                <br/>
                            </h1>
                            <p>
                                Netaji Subhas University of Technology
                            </p>
                        </div>			
                </div>
            </header>
        )
    }
}

export default Header;