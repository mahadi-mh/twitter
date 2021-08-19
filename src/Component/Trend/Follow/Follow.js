import React from 'react';
import './Follow.css'
import logo from '../../../Images/profile.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSun, } from '@fortawesome/free-solid-svg-icons'

const Follow = () => {
    return (
        <div className="follow-container">
            <h3>Who to follow</h3>

            <div className="row">

                <div className="row-item" width="70%">

                    <div className="row">
                        <div className="row-item" width="30%">
                            <div className="image">
                                <img src={logo} alt="" />
                            </div> 
                        </div>

                        <div className="row-item" width="70%">
                            <div>
                                Twitter <FontAwesomeIcon className="star-icon" icon={faSun} /> 
                                <br />
                                @Twitter
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row-item" width="30%">
                    <div className="follow-button">
                        <button className="button">Follow</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Follow;