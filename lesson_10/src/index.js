import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import './assets/styles/index.scss';
import { header } from './components/header';
import { slider } from './components/main__slider'
import { control_buttons } from './components/contlol_buttons';
import { album } from './components/main__album';
import { footer } from './components/footer';

const body = document.querySelector('.body');

body.append(header, slider, control_buttons, album, footer);

$('#carouselExampleControls').carousel({
    interval: 3000
})