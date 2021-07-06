import colors from './color.js';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};


class Switch {
  constructor() {
    this.interval = null;
    this.isActive = false;
  }

  changeBgcolor() {
    if (this.isActive) {
      return;
    }
    this.interval = setInterval(() => {
        this.isActive = true;
      refs.body.style.backgroundColor = this.getRandomColor();
    }, 1000);
  }

  stopChangeBgColor (){
      this.isActive = false;
      clearInterval(this.interval)
      
  }

  getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
}

const switchColor = new Switch();
refs.startBtn.addEventListener('click', switchColor.changeBgcolor.bind(switchColor));
refs.stopBtn.addEventListener('click', switchColor.stopChangeBgColor.bind(switchColor));