function classToggle() {
  const navLinks = document.querySelectorAll('.Box2');

  navLinks.forEach(navLink => navLink.classList.toggle('navbar__toggleshow'));
}

document.querySelector('.navbar__link-toggle').addEventListener('click', classToggle);

