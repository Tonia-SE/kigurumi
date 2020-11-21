import { adults } from "../contlol_buttons/cards_mock";

export const album  = document.createElement('div');
album.className = 'album py-5';
album.style.backgroundColor = "rgb(181, 233, 224) !important";

const container = document.createElement('div');
container.className = 'container';
container.style.backgroundColor = "rgb(181, 233, 224) !important";

const row = document.createElement('div');
row.className = 'row';

album.append(container);
container.append(row);

export function createCards(cardsList, bgColor = 'bg-light') {

  let currentAlbum = document.querySelector('.album')
  if (currentAlbum === null) {
    currentAlbum = album;
  }

  currentAlbum.className = 'album py-5 ' + bgColor;

  const cardsToDelete = document.querySelectorAll('.col-md-4')
  for (let card of cardsToDelete) {
    row.removeChild(card);
  }

  cardsList.forEach(element => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = "col-md-4";
    cardWrapper.style.paddingTop = "3%";

    const card = document.createElement('div');
    card.className = 'card mb-4 shadow-sm';

    const img = document.createElement('img')
    img.src = element.imageUrl;
    if (bgColor === 'bg-primary') {
      img.style.padding = "0 6% 0 6%"
    }
    img.alt = "KIGURUMI me";
    img.className = "bd-placeholder-img card-img-top";
    img.width = '100%';
    

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.style.paddingTop = '10px';
    cardBody.style.paddingBottom = '10px';

    const textContent = document.createElement('p');
    textContent.className = "card-text";
    textContent.textContent = element.description;
    textContent.style.paddingTop = '2%'

    const wrapper = document.createElement('div');
    wrapper.className = "d-flex justify-content-between align-items-center";

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    btnGroup.style.padding = '0 0 4% 0';

    const price = document.createElement('small');
    price.className = "text-muted price";
    price.style.fontSize = '2rem';
    price.textContent = element.price;

    const buyNow = document.createElement('button');
    buyNow.className = "btn btn-sm btn-outline-secondary";
    buyNow.type = "button";
    buyNow.id = "card_btn-BUY";
    buyNow.textContent = 'BUY';
    buyNow.setAttribute('cardid', element.id)
    buyNow.disabled = true;
    
    const quantity = document.createElement('button');
    quantity.className = "btn btn-sm btn-outline-secondary";
    quantity.type = "button";
    quantity.id = "card_btn-quantity";

    const minus = document.createElement('span');
    minus.className = "button_span";
    minus.id = "left";
    minus.setAttribute('cardid', element.id)
    minus.style.paddingRight = '10px';
    minus.textContent = "-";

    minus.addEventListener('click', (event) => {
      const cardId = event.target.getAttribute('cardid');
      const number = document.querySelector('span[cardid=\"' + cardId + '\"][qty=true]')      
      let currentQty = parseInt(number.textContent);
      if (currentQty > 0) {
        currentQty --;
        number.textContent = currentQty;
      }
      const buyNowBtn = document.querySelector('button[cardid=\"' + cardId + '\"]')
      if (currentQty === 0) {
        buyNowBtn.disabled = true;
      } else {
        buyNowBtn.disabled = false;
      }
    })

    const plus = document.createElement('span');
    plus.className = "button_span";
    plus.id = "right";
    plus.style.paddingLeft = '10px';
    plus.setAttribute('cardid', element.id)
    plus.textContent = "+";

    plus.addEventListener('click', (event) => {
      const cardId = event.target.getAttribute('cardid');
      const number = document.querySelector('span[cardid=\"' + cardId + '\"][qty=true]')      
      let currentQty = parseInt(number.textContent)
      const buyNowBtn = document.querySelector('button[cardid=\"' + cardId + '\"]')
      if (currentQty < 9) {
        currentQty ++;
      }
      number.textContent = currentQty;
      if (currentQty === 0) {
        buyNowBtn.disabled = true;
      } else {
        buyNowBtn.disabled = false;
      }
    })

    const number = document.createElement('span');
    number.textContent = "0";
    number.setAttribute('qty', 'true')
    number.setAttribute('cardid', element.id)

    const sizeWrapper = document.createElement('div');
    sizeWrapper.className = "dropdown"

    const sizeButton = document.createElement('button');
    sizeButton.className = "btn btn-sm btn-outline-secondary dropdown-toggle";
    sizeButton.setAttribute("data-toggle", "dropdown");
    sizeButton.setAttribute("aria-haspopup", "true");
    sizeButton.setAttribute("aria-expanded", "false");
    sizeButton.style.borderLeft = "none";

    sizeButton.type = "button";
    sizeButton.id = "card_btn-sizes";
    sizeButton.textContent = "SIZE"    

    const sizeMenu = document.createElement('div')
    sizeMenu.className = "dropdown-menu";
    sizeMenu.setAttribute("aria-labelledby", "dropdownMenuButton");

    element.sizes.forEach(size => {
      const sizeMenuItem = document.createElement('a');
      sizeMenuItem.classList = "dropdown-item" 
      sizeMenuItem.href = "#"
      sizeMenuItem.textContent = size;
      sizeMenu.append(sizeMenuItem);
    });

    sizeWrapper.append(sizeButton, sizeMenu)

    const heart = document.createElement('small');
    heart.className = "text-muted";
    heart.style.margin = "6%";
    heart.style.color = "red";
    heart.style.fontSize = "1.5rem";
    heart.id = "heart";
    heart.textContent = '♡'; //♥
    heart.addEventListener('click', (event) => {
      if (event.target.textContent == '♡') {
        heart.textContent = '♥';
      } else {
        heart.textContent = '♡';
      }
    })
    
    row.append(cardWrapper);
    cardWrapper.append(card);
    card.append(heart);
    card.append(img);
    card.append(cardBody);
    cardBody.append(price);
    cardBody.append(textContent);    
    // btnGroup.append(price);
    cardBody.append(wrapper);
    quantity.append(minus);
    quantity.append(number);
    quantity.append(plus);
    btnGroup.append(buyNow);
    btnGroup.append(quantity);
    btnGroup.append(sizeWrapper);
    wrapper.append(btnGroup);
  });

}
createCards(adults);