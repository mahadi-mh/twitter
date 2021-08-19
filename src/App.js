import './App.css';
import Menu from '../src/Component/Menu/Menu'
import Header from '../src/Component/Tweet/Header/Header'
import TweetBody from '../src/Component/Tweet/Tweet-Body/TweetBody'
import WhatHappen from '../src/Component/whats-happening/WhatHappen'
import Trend from '../src/Component/Trend/Trend'

function App() {

  return (
    <div>
      <div className="main-container">
        <div className="menu-container">
          <Menu />
        </div>

        <div className="tweet-body-container">
          <Header />
          <WhatHappen />
          <TweetBody />
        </div>

        <div className="trending-container">
          <Trend />
        </div>
      </div>
    </div>
  );
}


export default App;
