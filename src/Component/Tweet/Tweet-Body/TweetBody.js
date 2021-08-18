import React from 'react';
import './TweetBody.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkSquareAlt, faReply, faRetweet, faShare} from '@fortawesome/free-solid-svg-icons'


const TweetBody = () => {
    const tweet = {
        name: 'Mahadi hasan',
        description: 'I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel.I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel.I am Mahadi and i am a pro programmer.I can solve any problem without thinking for double time i love to travel',
    }

    return (
        <div>
            <Tweet name={tweet.name} desc={tweet.description}/>
            <Tweet name={tweet.name} desc={tweet.description}/>
            <Tweet name={tweet.name} desc={tweet.description}/>
        </div>
    );
};

function Tweet(props) {
    return (
        <div className="eatch-tweet-body-container">
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <div className="icon-handle">
                <button><FontAwesomeIcon icon={faReply}/></button>
                <button><FontAwesomeIcon icon={faRetweet}/></button>
                <button>
                    <FontAwesomeIcon icon={faExternalLinkSquareAlt}/></button>
                <button>
                    <FontAwesomeIcon icon={faShare}/></button>
            </div>
        </div>
    );
}

export default TweetBody;