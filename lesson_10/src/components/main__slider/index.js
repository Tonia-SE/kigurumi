export const slider = document.createElement('section');
slider.className = 'slider';

const carouselSlide = document.createElement('div');
carouselSlide.className = "carousel slide";
carouselSlide.id = "carouselExampleControls";
carouselSlide.setAttribute("data-ride", "carousel");

const carouselInner = document.createElement('div');
carouselInner.className = "carousel-inner";

const sliderBtnNext = document.createElement('a');
sliderBtnNext.innerHTML = 
`<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>`

const sliderBtnPrev = document.createElement('a');
sliderBtnPrev.innerHTML = `
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>`

slider.append(carouselSlide);
carouselSlide.append(carouselInner);
for(let i = 1; i < 7; i++) {
  const carouselItem = document.createElement('div');
  carouselItem.className = "carousel-item";
  if (i === 1) {
    carouselItem.classList = "carousel-item active";
  }
  const image = document.createElement('img');
  image.className = "d-block w-100";
  image.alt = "KIGURUMI";
  image.src = "./assets/images/slider__" + i + ".jpg"
  carouselItem.append(image);
  carouselInner.append(carouselItem);
}
carouselInner.append(sliderBtnNext, sliderBtnPrev);




