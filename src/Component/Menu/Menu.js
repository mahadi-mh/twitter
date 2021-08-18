import React from 'react';
import logo from '../../Images/twitter-icon.png'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookmark, faCircle, faHashtag, faHouseUser, faList, faNotesMedical, faSms, faUser } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    return (
        <div >
            <a href="/home" className='menu-img'><img src={logo} alt="" /></a>
            <br/> <br/>
           <button className="btn-des" id="home-btn"><FontAwesomeIcon icon={faHouseUser} />  Home</button><br/>
           <button className="btn-des"><FontAwesomeIcon icon={faHashtag} />    Explore</button><br/>
           <button className="btn-des"><FontAwesomeIcon icon={faNotesMedical} />    Notification</button><br/>
           <button className="btn-des"><FontAwesomeIcon icon={faSms} />    Messages</button><br/>
           <button className="btn-des"><FontAwesomeIcon icon={faBookmark} />    Bookmark</button><br/>
           <button className="btn-des"><FontAwesomeIcon icon={faList} />    List</button><br/>
           <button className="btn-des"><FontAwesomeIcon icon={faUser} />    Profile</button><br/>
           <button className="btn-des"><FontAwesomeIcon icon={faCircle} />    More</button><br/>
           <button id="tweet-btn">Tweet</button><br/>
    
        </div>
    );
};

export default Menu;