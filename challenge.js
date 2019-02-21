// window.onload = setInterval;

run = document.addEventListener('DOMContentLoaded', timer);

let counter = document.querySelector('#counter');
let plus = document.querySelector('#\\+');
let minus = document.querySelector('#\\-');
let like = document.querySelector('#\\<3');
let ulElement = document.querySelector('.likes');
let pause = document.querySelector('#pause');
let submitInput = document.querySelector('#submit');

function incrementCounter() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function decrementCounter() {
  counter.innerText = parseInt(counter.innerText) - 1;
}

likes = {};

function addLike() {
  if (likes[counter.innerText]) {
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
    clearInterval(timeStart);
  } else {
    pause.innerText = 'pause';
    timer();
  }
}

function timer() {
  timeStart = setInterval(incrementCounter, 1000);
}

function submitInput() {
  submit.innerText;
}

plus.addEventListener('click', incrementCounter);
minus.addEventListener('click', decrementCounter);
like.addEventListener('click', addLike);
pause.addEventListener('click', interrupt);
submit.addEventListener('click', submitInput);
