import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { dappletState } from '@dapplets/dapplet-overlay-bridge';
// const DappletState = dappletState(App);

let frameHeight = 0;
let frameWidth = 0;

const sendPostMessage = () => {
  const root = document.getElementById('root')!;
  if (frameHeight !== root.offsetHeight || frameWidth !== root.offsetWidth) {
    frameHeight = root.offsetHeight;
    frameWidth = root.offsetWidth;
    const name = window.name
    window.parent.postMessage({ name, frameHeight, frameWidth }, '*');
  }
}

window.onload = () => sendPostMessage();
window.onresize = () => sendPostMessage();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
