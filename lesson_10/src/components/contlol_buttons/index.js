import { createCards } from '../main__album';
import {adults, kids, slippers} from './cards_mock';

export const control_buttons = document.createElement('section');
control_buttons.className = 'control_buttons';

const adultBtn = document.createElement('button');
adultBtn.id = "adult"
adultBtn.className="btn btn-outline-info"
adultBtn.textContent = "YOUR KIGURUMI";
adultBtn.addEventListener('click', () => {
  createCards(adults, 'bg-light')
})

const kidsBtn = document.createElement('button');
kidsBtn.id = "kids";
kidsBtn.className = "btn btn-outline-info"
kidsBtn.textContent = "KIDS KIGURUMI"
kidsBtn.addEventListener('click', () => {
  createCards(kids, 'bg-danger')
})

const slippersBtn = document.createElement('button');
slippersBtn.id = "slippers"
slippersBtn.className="btn btn-outline-info"
slippersBtn.textContent = "YOUR SLIPPERS"
slippersBtn.addEventListener('click', () => {
  createCards(slippers, 'bg-primary')
})

control_buttons.append(adultBtn, kidsBtn, slippersBtn)
