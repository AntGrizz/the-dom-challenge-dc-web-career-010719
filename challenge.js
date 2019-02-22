// window.onload = setInterval;

run = document.addEventListener('DOMContentLoaded', timer);

let counter = document.querySelector('#counter');
let plus = document.querySelector('#\\+');
let minus = document.querySelector('#\\-');
let like = document.querySelector('#\\<3');
let ulElement = document.querySelector('.likes');
let pause = document.querySelector('#pause');
let commentForm = document.querySelector('form');
let submit = document.querySelector('button#submit');
let buttonsToggle = [minus, plus, like, submit];

function incrementCounter() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function decrementCounter() {
  counter.innerText = parseInt(counter.innerText) - 1;
}

likes = {};

function addLike() {
  if (counter.innerText in likes) {
    // debugger;
    likes[counter.innerText] += 1;
  } else {
    likes[counter.innerText] = 1;
  }

  ulElement.innerText = '';
  for (const key in likes) {
    liElement = document.createElement('li');
    if (likes[key] > 1) {
      liElement.innerText = `${key} has been liked ${likes[key]} times.`;
      ulElement.appendChild(liElement);
    } else {
      liElement.innerText = `${key} has been liked ${likes[key]} time.`;
      ulElement.appendChild(liElement);
    }
  }
}

function interrupt() {
  if (pause.innerText === 'pause') {
    pause.innerText = 'resume';
    buttonsToggle.forEach(button => (button.disabled = true));
    clearInterval(timeStart);
  } else {
    pause.innerText = 'pause';
    buttonsToggle.forEach(button => (button.disabled = false));
    timer();
  }
}

function timer() {
  timeStart = setInterval(incrementCounter, 1000);
}

let formElement = document.querySelector('form');
let input = document.querySelector('input');
let commentList = document.querySelector('.comments');

formElement.addEventListener('submit', function(event) {
  event.preventDefault();
  let p = document.createElement('p');
  // debugger;
  p.innerText = input.value;
  commentList.appendChild(p);
  formElement.reset();
  // debugger;
});

plus.addEventListener('click', incrementCounter);
minus.addEventListener('click', decrementCounter);
like.addEventListener('click', addLike);
pause.addEventListener('click', interrupt);
