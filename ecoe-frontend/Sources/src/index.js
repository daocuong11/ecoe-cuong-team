import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Root from "./app/components/Root.js";
import * as serviceWorker from './serviceWorker';

require('dotenv').config();


console.log(process.env.REACT_APP_NOT_SECRET_CODE);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
