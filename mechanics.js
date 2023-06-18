function classToggle() {
  const navLinks = document.querySelectorAll('.Box2');

  navLinks.forEach(navLink => navLink.classList.toggle('navbar__toggleshow'));
}

document.querySelector('.navbar__link-toggle').addEventListener('click', classToggle);

// This function is for the slide show to display a text when the mouse is hover on the image
function TextHover(){
  let img1 = document.getElementById("slide_img1");
  let img2 = document.getElementById("slide_img2");
  let img3 = document.getElementById("slide_img3");
  let img4 = document.getElementById("slide_img4");
  let img5 = document.getElementById("slide_img5");
  let img6 = document.getElementById("slide_img6");
  let img7 = document.getElementById("slide_img7");
  let img8 = document.getElementById("slide_img8");
  let img9 = document.getElementById("slide_img9");
  let img10 = document.getElementById("slide_img10");
}
