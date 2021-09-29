const containerEl = document.getElementById('container');
const textEl = document.getElementById('text');

const totalTime = 9000;

const breathTime = 3000;
const holdTime = 1500;

console.log(breathTime, holdTime);

function breathAnimation() {
  containerEl.classList.remove('shrink');
  containerEl.classList.add('grow');
  textEl.innerText = 'Breath in...';
  console.log('Breath In!');
  setTimeout(() => {
    console.log('Hold!');
    textEl.innerText = 'Hold!';

    setTimeout(() => {
      containerEl.classList.remove('grow');
      containerEl.classList.add('shrink');
      textEl.innerText = 'Breath out...';
      console.log('Breath Out!');
      setTimeout(() => {
        console.log('Hold');
        textEl.innerText = 'Hold!';
      }, breathTime);
    }, holdTime);
  }, breathTime);
}

breathAnimation();

setInterval(breathAnimation, totalTime);
