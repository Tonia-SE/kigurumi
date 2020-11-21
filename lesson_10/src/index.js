import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/styles/index.scss';
// import { header } from './components/header';
// import { test } from './components/test'
import { header } from './components/header';
import { slider } from './components/main__slider'
import { control_buttons } from './components/contlol_buttons';
import { album } from './components/main__album';
import { footer } from './components/footer';

// const heading = document.createElement('h1');
// heading.textContent = 'Kigurumi';

const body = document.querySelector('.body');

// body.style.background = "url('./assets/images/slider_1.jpg')";
// body.append(heading, heading_2);

// const body_wrapper =  document.createElement('div');
// body_wrapper.style.background = "url('./assets/images/slider_1.jpg')";
// body_wrapper.className = '.body_wrapper';
// body.append(body_wrapper);

// body.append(test);
body.append(header, slider, control_buttons, album, footer);