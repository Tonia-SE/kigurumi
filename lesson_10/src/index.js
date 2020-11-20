import './assets/styles/index.scss';
import { header } from './components/header';
// import { test } from './components/test'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// const heading = document.createElement('h1');
// heading.textContent = 'Kigurumi';

const body = document.querySelector('body');
// body.style.background = "url('./assets/images/slider_1.jpg')";
// body.append(heading, heading_2);

// const body_wrapper =  document.createElement('div');
// body_wrapper.style.background = "url('./assets/images/slider_1.jpg')";
// body_wrapper.className = '.body_wrapper';
// body.append(body_wrapper);

// body.append(test);
body.append(header);