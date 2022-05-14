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
}

PageTransitions();