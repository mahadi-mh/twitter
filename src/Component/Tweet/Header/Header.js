import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className="header-container">
        <span>Home</span>
        <a href="/tweet" id="top-tweet-star"><FontAwesomeIcon icon={faStar} /> </a>  
     </div>
    );
};

export default Header;