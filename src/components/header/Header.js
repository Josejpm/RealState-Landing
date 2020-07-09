import React from 'react';
import './Header.scss'
import house from './house.jpg'

const Header = () => {
    return ( 
        <div className="header-container">
            <img className='house' src={house}/>
        </div>
        
     );
}
 
export default Header;