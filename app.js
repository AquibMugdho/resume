const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }

  //section active class
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other btns
      const btns = sectBtns[0].children;
      for (let btn of btns) {
        btn.classList.remove('active')
      }
      e.target.classList.add('active')

      //hide other sectiobns
      sections.forEach((section) => {
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  //toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}

const textString = `Wake up, Neo...

The Matrix has you...
Follow the white rabbit...


Knock, knock, Neo!`;

const textDiv = document.getElementById("text");

let idx = 0;
let it;

setText = _ => {
  if (idx === textString.length) {
    clearInterval(it);
    setTimeout(_ => {
      idx = 0;
      textDiv.textContent = "";
      it = setInterval(setText, 90);
    }, 1000);
  } else {
    textDiv.textContent += textString[idx];
    idx++;
  }
};

it = setInterval(setText, 90);

PageTransitions();



  
    