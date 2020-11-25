import { menu } from './nav_menu.js';
import { menuBtn } from './nav_menu.js';
import { logo } from './logo.js';

export const nav = document.createElement('div');
nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
nav.append(logo, menuBtn, menu);

