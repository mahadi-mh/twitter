import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, } from '@fortawesome/free-solid-svg-icons'

import './Trend.css'
import Follow from './Follow/Follow';


const Trend = () => {
    return (
        <div className="container">

            <div className="search-item">
                <input type="text" placeholder="Search Twitter" />

                <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
                </div>

            </div>

            <div className="follow-item">
                <h3 className="trend">Trends for you</h3>
                
            </div>

            <div className="follow-gallery">
                <Follow></Follow>
            </div>

        </div>
    );
};

export default Trend;