export const header = document.createElement('div');
header.className = 'header';
const header_wrapper = document.createElement('div');

import { header_logo } from './header_logo.js';
import { header_navBar } from './header_nav.js';

header_wrapper.append(header_logo); 
header_wrapper.append(header_navBar); 
header.append(header_wrapper); 
