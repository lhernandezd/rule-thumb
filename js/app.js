class State {
  constructor(size) {
    this.state = {};
    this.total = [];
    this.positive = [];

    for (let i = 0; i<size; i++) {
      this.state[`${i}`] = {};
      this.total[`${i}`] = 1;
      this.positive[`${i}`] = 1;
    }
  }
  
  positiveVoting(index) {
    this.total[index]= this.total[index] + 1;
    this.positive[index] = this.positive[index] + 1;
    this.state[index]['positive'] = this.positive[index];
    this.state[index]['total'] = this.total[index];

    return (this.positive[index]/this.total[index])*100
  }

  negativeVoting(index) {
    this.total[index] = this.total[index] + 1;
    this.state[index]['total'] = this.total[index];

    return (this.positive[index]/this.total[index])*100
  }
}


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

//Event for Vote now
const vote_again = document.getElementsByClassName('button__inline--again');
const vote_now = document.getElementsByClassName('button__inline--now');
const like = document.getElementsByClassName('progress__like');
const dislike = document.getElementsByClassName('progress__dislike');
const bar = document.getElementsByClassName('progress__value');
let value = new State(bar.length);

for (let i = 0; i<vote_now.length; i++) {
  vote_now[i].addEventListener('click', function(e) {
    e.preventDefault();
    
    if (thumbs_up[i].classList.contains('active')) {

      let percentage = value.positiveVoting(i);
      bar[i].style.width = `${percentage}%`;
      like[i].innerHTML = `${Math.round(percentage)}%`
      dislike[i].innerHTML = `${Math.round(100 - percentage)}%`;

    } else if (thumbs_down[i].classList.contains('active')) {

      let percentage = value.negativeVoting(i);
      bar[i].style.width = `${percentage}%`;
      dislike[i].innerHTML = `${Math.round(100 - percentage)}%`;
      like[i].innerHTML = `${Math.round(percentage)}%`;
    }
    textDefault[i].classList.toggle('active');
    textAgain[i].classList.toggle('active');
    vote_now[i].classList.toggle('active');
    vote_again[i].classList.toggle('active');
    thumbs_up[i].classList.toggle('none');
    thumbs_down[i].classList.toggle('none');
  })
}

//Event for vote again
const textDefault = document.getElementsByClassName('content__text--default');
const textAgain = document.getElementsByClassName('content__text--again');

for (let i = 0; i<vote_again.length; i++) {
  vote_again[i].addEventListener('click', function(e) {
    e.preventDefault();

    textDefault[i].classList.toggle('active');
    textAgain[i].classList.toggle('active');
    vote_now[i].classList.toggle('active');
    vote_again[i].classList.toggle('active');
    thumbs_up[i].classList.toggle('none');
    thumbs_down[i].classList.toggle('none');
  })
}