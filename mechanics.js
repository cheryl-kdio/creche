function classToggle() {
  const navLinks = document.querySelectorAll('.Box2');

  navLinks.forEach(navLink => navLink.classList.toggle('navbar__toggleshow'));
}

document.querySelector('.navbar__link-toggle').addEventListener('click', classToggle);


let ImageID = 0;

function fadeIn(element) {
  element.style.opacity = 0;
  let opacity = 0;

  let fadeInterval = setInterval(function () {
    opacity += 0.05;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInterval);
    }
  }, 50);
}

function fadeOut(element) {
  let opacity = 1;

  let fadeInterval = setInterval(function () {
    opacity -= 0.05;
    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeInterval);
    }
  }, 50);
}

function changeImage() {
  ImageID++;
  if (ImageID > 5) {
    ImageID = 0;
  }
  let carouselImage = document.querySelector('.CarrouselImage');

  fadeOut(carouselImage);

  setTimeout(function () {
    if (ImageID == 0) {
      carouselImage.src = "Image/Loc1.jpg";
    } else if (ImageID == 1) {
      carouselImage.src = "Image/Loc2.jpg";
    } else if (ImageID == 2) {
      carouselImage.src = "Image/Loc3.jpg";
    } else if (ImageID == 3) {
      carouselImage.src = "Image/Loc4.jpg";
    } else if (ImageID == 4) {
      carouselImage.src = "Image/Loc5.jpg";
    }

    fadeIn(carouselImage);
  }, 500);
}



window.setInterval(changeImage, 3000);