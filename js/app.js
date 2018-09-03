
/* DOM Events */

//Event for the navbar (toggle burger)
const navRight = document.getElementsByClassName('navbar__section navbar__section--right');

document.getElementById('burger').addEventListener('click', function(e) {
  navRight[0].classList.toggle('active__block');
  if (navRight[0].classList.contains('active__block')) {
    this.firstElementChild.setAttribute('src','images/white_close.svg');
  } else {
    this.firstElementChild.setAttribute('src','images/burger.svg');
  }
});

//Event Select vote
const thumbs_up = document.getElementsByClassName('thumbs__button');
const thumbs_down = document.getElementsByClassName('thumbs__button--dislike');

for (let i = 0; i<thumbs_up.length; i++) {
  thumbs_up[i].addEventListener('click', function(e) {
    e.currentTarget.classList.add('active');
    thumbs_down[i].classList.remove('active');
  })
  thumbs_down[i].addEventListener('click', function(e) {
    e.currentTarget.classList.add('active');
    thumbs_up[i].classList.remove('active');
  })
}