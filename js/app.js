
/* Event for the navbar (toggle burger) */
const navRight = document.getElementsByClassName('navbar__section navbar__section--right');
document.getElementById('burger').addEventListener('click', function(e) {
  navRight[0].classList.toggle('active__block');
  if (navRight[0].classList.contains('active__block')) {
    this.firstElementChild.setAttribute('src','images/white_close.svg');
  } else {
    this.firstElementChild.setAttribute('src','images/burger.svg');
  }
});