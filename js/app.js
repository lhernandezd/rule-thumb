class State {
  constructor(size, load) {
    this.state = {};
    this.total = [];
    this.positive = [];
    this.start = [];

    if (load) {
      const obj = JSON.parse(load);
      Object.keys(obj).map((item, i) => {
        this.state[`${i}`] = obj[item] || {};
        this.total[`${i}`] = obj[item].total || 0;
        this.positive[`${i}`] = obj[item].positive || 0;
        this.start[`${i}`] = obj[item].start || false;
      });
    } else {
      for (let i = 0; i < size; i++) {
        this.state[`${i}`] = {};
        this.total[`${i}`] = 0;
        this.positive[`${i}`] = 0;
        this.start[`${i}`] = false;
      }
    }
  }

  positiveVoting(index) {
    if (this.start[index]) {
      this.total[index] += 1;
      this.positive[index] += 1;
      this.state[index]["positive"] = this.positive[index];
      this.state[index]["total"] = this.total[index];

      return (this.positive[index] / this.total[index]) * 100;
    } else {
      this.start[index] = true;
      this.state[index]["start"] = this.start[index];
      this.state[index]["total"] = this.total[index] = 1;
      this.state[index]["positive"] = this.positive[index] = 1;
      return 100;
    }
  }

  negativeVoting(index) {
    if (this.start[index]) {
      this.total[index] += 1;
      this.positive[index] += 0;
      this.state[index]["positive"] = this.positive[index];
      this.state[index]["total"] = this.total[index];

      return (this.positive[index] / this.total[index]) * 100;
    } else {
      this.start[index] = true;
      this.state[index]["start"] = this.start[index];
      this.state[index]["total"] = this.total[index] = 1;
      this.state[index]["positive"] = this.positive[index] = 0;
      return 0;
    }
  }

  majority(likeCard, dislikeCard, load) {
    let compare;

    if (load) this.state = JSON.parse(load);
    Object.keys(this.state).forEach(position => {
      if (this.state[position]["positive"]) {
        this.positive[position] = this.state[position]["positive"];
        this.total[position] = this.state[position]["total"];
      } else {
        this.positive[position] = 1;
        this.total[position] = 1;
      }
    });

    Object.keys(this.state).forEach(position => {
      compare =
        this.state[position]["total"] - this.state[position]["positive"];
      if (compare > this.state[position]["positive"]) {
        likeCard[position].classList.remove("active");
        dislikeCard[position].classList.add("active");
      } else {
        dislikeCard[position].classList.remove("active");
        likeCard[position].classList.add("active");
      }
    });
  }

  save() {
    let data = JSON.stringify(this.state);
    localStorage.setItem("data", data);
  }

  draw(bar, load) {
    this.state = JSON.parse(load);
    Object.keys(this.state).forEach(position => {
      if (this.state[position]["positive"]) {
        this.positive[position] = this.state[position]["positive"];
        this.total[position] = this.state[position]["total"];
      } else {
        this.positive[position] = 1;
        this.total[position] = 1;
      }
    });
    for (let i = 0; i < bar.length; i++) {
      if (this.state[i]["total"]) {
        bar[i].style.width = `${(this.state[i]["positive"] /
          this.state[i]["total"]) *
          100}%`;
        like[i].innerHTML = `${Math.round(
          (this.state[i]["positive"] / this.state[i]["total"]) * 100
        )}%`;
        dislike[i].innerHTML = `${Math.round(
          100 - (this.state[i]["positive"] / this.state[i]["total"]) * 100
        )}%`;
      } else {
        bar[i].style.width = `${50}%`;
        like[i].innerHTML = `${50}%`;
        dislike[i].innerHTML = `${50}%`;
      }
    }
  }
}

/* START: DOM Events */

// Get local storage
const load = localStorage.getItem("data");

// For Status Event
const likeCard = document.getElementsByClassName("content--like");
const dislikeCard = document.getElementsByClassName("content--dislike");

// When Load
window.addEventListener("load", function(e) {
  if (load) {
    value.draw(bar, load);
    value.majority(likeCard, dislikeCard, load);
  }
});

// Event for the navbar
const navRight = document.getElementsByClassName(
  "navbar__section navbar__section--right"
);

/* Burger event */
document.getElementById("burger").addEventListener("click", function(e) {
  navRight[0].classList.toggle("active__block");
});

/* Close event */
document.getElementById("close").addEventListener("click", function(e) {
  navRight[0].classList.toggle("active__block");
});

// Event Select vote
const thumbs_up = document.getElementsByClassName("thumbs__button");
const thumbs_down = document.getElementsByClassName("thumbs__button--dislike");

/* -- Set active the current thumb -- */
for (let i = 0; i < thumbs_up.length; i++) {
  thumbs_up[i].addEventListener("click", function(e) {
    e.currentTarget.classList.add("active");
    thumbs_down[i].classList.remove("active");
  });
  thumbs_down[i].addEventListener("click", function(e) {
    e.currentTarget.classList.add("active");
    thumbs_up[i].classList.remove("active");
  });
}

// Event for Vote now
const vote_again = document.getElementsByClassName("button__inline--again");
const vote_now = document.getElementsByClassName("button__inline--now");
const like = document.getElementsByClassName("progress__like");
const dislike = document.getElementsByClassName("progress__dislike");
const bar = document.getElementsByClassName("progress__value");
let value = new State(bar.length, load);

for (let i = 0; i < vote_now.length; i++) {
  vote_now[i].addEventListener("click", function(e) {
    e.preventDefault();

    /* -- Progress bar percentage calculation -- */
    if (thumbs_up[i].classList.contains("active")) {
      let percentage = value.positiveVoting(i);
      bar[i].style.width = `${percentage}%`;
      like[i].innerHTML = `${Math.round(percentage)}%`;
      dislike[i].innerHTML = `${Math.round(100 - percentage)}%`;
      /* -- Save the values -- */
      value.save();
    } else if (thumbs_down[i].classList.contains("active")) {
      let percentage = value.negativeVoting(i);
      bar[i].style.width = `${percentage}%`;
      dislike[i].innerHTML = `${Math.round(100 - percentage)}%`;
      like[i].innerHTML = `${Math.round(percentage)}%`;
      /* -- Save the values -- */
      value.save();
    }

    /* -- Refresh the thumb indicator in card -- */
    value.majority(likeCard, dislikeCard);

    /* -- Toggle the display in the card content -- */
    textDefault[i].classList.toggle("active");
    textAgain[i].classList.toggle("active");
    vote_now[i].classList.toggle("active");
    vote_again[i].classList.toggle("active");
    thumbs_up[i].classList.toggle("none");
    thumbs_down[i].classList.toggle("none");
  });
}

// Event for vote again
const textDefault = document.getElementsByClassName("content__text--default");
const textAgain = document.getElementsByClassName("content__text--again");

for (let i = 0; i < vote_again.length; i++) {
  vote_again[i].addEventListener("click", function(e) {
    e.preventDefault();

    /* -- Toggle the display in the card content -- */
    textDefault[i].classList.toggle("active");
    textAgain[i].classList.toggle("active");
    vote_now[i].classList.toggle("active");
    vote_again[i].classList.toggle("active");
    thumbs_up[i].classList.toggle("none");
    thumbs_down[i].classList.toggle("none");
  });
}
