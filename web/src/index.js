import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from '../src/Component/DashBoard/Dashboard';
import HomePage from '../src/Component/Page/Home';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const e = React.createElement
const tweetHomeEl = document.getElementById("tweetme-home")
if (tweetHomeEl) {
  ReactDOM.render(
    e(HomePage, tweetHomeEl.dataset), tweetHomeEl);
}


const tweetFeedEl = document.getElementById("tweetme-2-feed")
if (tweetFeedEl) {
  ReactDOM.render(
    e(Dashboard, tweetFeedEl.dataset), tweetFeedEl);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
