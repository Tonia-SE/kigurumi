export const nav = document.createElement('div');
nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
nav.innerHTML = `
        <a class="navbar-brand" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank">
          <img id="logo" src="/assets/images/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
          KIGURUMI me
        </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="outline: none;">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B3%D1%83%D1%80%D1%83%D0%BC%D0%B8" target="blank">About us<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="https://boxberry.ru/" target="blank">Delivery</a>
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
            <li class="nav-item active">
              <a class="nav-link" href="#">Log in</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Register</a>
            </li>
          </ul>
        </div>`;
