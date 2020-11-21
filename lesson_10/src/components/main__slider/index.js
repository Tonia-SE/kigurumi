export const slider = document.createElement('section');
slider.className = 'slider';

slider.innerHTML = `
<div class="slider_wrapper">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner" >
    <div class="carousel-item active" >
      <img class="d-block w-100" src="/assets/images/slider_1.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/images/slider_2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/images/slider_3.jpg" alt="Third slide">
    </div>
  </div>
</div>`
