import {logIn, signUp, logOut} from './regForm.js';

export const menuBtn = document.createElement('button');
menuBtn.className = "navbar-toggler";
menuBtn.type = "button";
menuBtn.id = "icon";
menuBtn.setAttribute("data-toggle", "collapse");
menuBtn.setAttribute("data-target", "#navbarSupportedContent");
menuBtn.setAttribute("aria-controls", "navbarSupportedContent");
menuBtn.setAttribute("aria-expanded", "false");
menuBtn.setAttribute("aria-label", "Toggle navigation");
const menuIcon = document.createElement('span');
menuIcon.className = "navbar-toggler-icon";
menuBtn.append(menuIcon);


export const menu = document.createElement('div');
menu.className = "collapse navbar-collapse";
menu.id = "navbarSupportedContent";

const menuList = document.createElement("ul");
menuList.className = "navbar-nav mr-auto";
menuList.innerHTML = `
<li class="nav-item active">
  <a class="nav-link" href="" target="blank">About us<span class="sr-only">(current)</span></a>
</li>

<li class="nav-item active">
  <a class="nav-link" href="" target="blank">Delivery</a>
</li>

<li class="nav-item dropdown active">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Contacts
  </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownMenuNav">
    <a class="dropdown-item" href="https://www.google.ru/maps" target="blank">Address</a>
    <a class="dropdown-item" href="https://play.google.com/store/apps/details?id=com.google.android.dialer&hl=ru&gl=US" target="blank">Support</a>
    <a class="dropdown-item" href="https://www.google.com/intl/ru/gmail/about/" target="blank">E-mail</a>
  </div>
</li>

<li class="nav-item active">
  <a class="nav-link" href="https://pay.google.com/intl/ru_ru/about/" target="blank">Payment</a>
</li>
`
menuList.append(logIn, signUp, logOut);
menu.append(menuList);




