var interval = 0;

function moveUp() {
  var element = document.getElementById('horse1');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
  element.className = 'horse runUp';

  if (positionTop == 60) {
        clearInterval(interval1);
        interval1 = setInterval(moveRight, 12);
  }
}

function moveUp1() {
  var element = document.getElementById('horse2');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
  element.className = 'horse runUp';

  if (positionTop == 60) {
        clearInterval(interval2);
        interval2 = setInterval(moveRight1, 10);
  }
}

function moveUp2() {
  var element = document.getElementById('horse3');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
  element.className = 'horse runUp';

  if (positionTop == 60) {
        clearInterval(interval3);
        interval3 = setInterval(moveRight2, 8);
  }
}

function moveUp3() {
  var element = document.getElementById('horse4');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
  element.className = 'horse runUp';

  if (positionTop == 60) {
        clearInterval(interval4);
        interval4 = setInterval(moveRight3, 6);
  }
}


function myClickDown() {
        //Clear existing intervals
        clearInterval(interval);

                interval1 = setInterval(moveRight, 12);


                interval2 = setInterval(moveRight1, 10);


                interval3 = setInterval(moveRight2, 8);


                interval4 = setInterval(moveRight3, 6);

}


function myLoadEvent() {
  var element = document.getElementById('start').onclick = myClickDown;
}

function moveDown() {
  var element = document.getElementById('horse1');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
  element.className = 'horse runDown';

  if (positionTop+200 == window.innerHeight) {
        clearInterval(interval1);
        interval1 = setInterval(moveLeft, 12);
  }
}

function moveDown1() {
  var element = document.getElementById('horse2');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
  element.className = 'horse runDown';


  if (positionTop+200 == window.innerHeight) {
        clearInterval(interval2);
        interval2 = setInterval(moveLeft1, 10);
  }
}

function moveDown2() {
  var element = document.getElementById('horse3');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
  element.className = 'horse runDown';

  if (positionTop+200 == window.innerHeight) {
        clearInterval(interval3);
        interval3 = setInterval(moveLeft2, 8);
  }
}

function moveDown3() {
  var element = document.getElementById('horse4');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
  element.className = 'horse runDown';

  if (positionTop+200 == window.innerHeight) {
        clearInterval(interval4);
        interval4 = setInterval(moveLeft3, 6);
  }
}

function moveLeft() {
  var element = document.getElementById('horse1');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
  element.className = 'horse runLeft';

  if (positionLeft == 60) {
        clearInterval(interval1);
        interval1 = setInterval(moveUp, 12);
  }
}

function moveLeft1() {
  var element = document.getElementById('horse2');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
  element.className = 'horse runLeft';

  if (positionLeft == 60) {
        clearInterval(interval2);
        interval2 = setInterval(moveUp1, 10);
  }
}

function moveLeft2() {
  var element = document.getElementById('horse3');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
  element.className = 'horse runLeft';

  if (positionLeft == 60) {
        clearInterval(interval3);
        interval3 = setInterval(moveUp2, 8);
  }
}

function moveLeft3() {
  var element = document.getElementById('horse4');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
  element.className = 'horse runLeft';

  if (positionLeft == 60) {
        clearInterval(interval4);
        interval4 = setInterval(moveUp3, 6);
  }
}

function moveRight() {
  var element = document.getElementById('horse1');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
  element.className = 'horse runRight';

  if (positionLeft == window.innerWidth*0.8) {
        clearInterval(interval1);
        interval1 = setInterval(moveDown, 12);
  }
}

function moveRight1() {
  var element = document.getElementById('horse2');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
  element.className = 'horse runRight';

  if (positionLeft == window.innerWidth*0.8) {
        clearInterval(interval2);
        interval2 = setInterval(moveDown1, 10);
  }
}

function moveRight2() {
  var element = document.getElementById('horse3');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
  element.className = 'horse runRight';

  if (positionLeft == window.innerWidth-200) {
        clearInterval(interval3);
        interval3 = setInterval(moveDown2, 8);
  }
}

function moveRight3() {
  var element = document.getElementById('horse4');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
  element.className = 'horse runRight';

  if (positionLeft == window.innerWidth-200) {
        clearInterval(interval4);
        interval4 = setInterval(moveDown3, 6);
  }
}




document.addEventListener('DOMContentLoaded', myLoadEvent);
