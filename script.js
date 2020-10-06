const navbar = document.querySelector('nav');
const logo = document.querySelector('.logo_cont');
const navLinks = document.querySelectorAll('.nav-link');
const about = document.querySelector('.container_about');
const portfolio = document.querySelector('.container_portfolio');
const contact = document.querySelector('.container_contact');

function debounce(func, wait = 15, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const scrollHeader = () => {
  if (window.screen.width > 550) {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      navbar.style.padding = "3vh";
      document.querySelector('header').style.backgroundColor = 'var(--dark)'
      logo.style.width = '180px';
      logo.style.height = '100px';
      logo.style.position = 'fixed';
      logo.style.top = '0';
      logo.style.left = '0';
      // logo.style.transform = 'translate(-36vw, -38vh)';
      logo.style.zIndex = '5'
      logo.style.backgroundImage = 'url(./img/logo-white.png)';

    } else {
      navbar.style.padding = "8vh";
      document.querySelector('header').style.backgroundColor = 'var(--dark-bigHeader)'
      logo.style.width = '250px';
      logo.style.height = '150px';
      logo.style.position = 'static';
      logo.style.transform = 'translate(0px, 0px)';
      logo.style.backgroundImage = 'url(./img/logo-white.png)'
    }
  }
};


const changeNavActive = () => {
  const changeAt = window.scrollY
  const aboutTop = about.offsetTop - about.offsetHeight;
  const portfolioTop = portfolio.offsetTop - portfolio.offsetHeight / 2;
  const contactTop = contact.offsetTop - contact.offsetHeight / 2;

  if (changeAt < aboutTop) {
    removeNavClasses();
    document.querySelector('.link_home').classList.add('active')
  } else if (changeAt > aboutTop && changeAt < portfolioTop && changeAt < contactTop) {
    removeNavClasses();
    document.querySelector('.link_about').classList.add('active')
  } else if (changeAt > portfolioTop && changeAt < contactTop) {
    removeNavClasses();
    document.querySelector('.link_works').classList.add('active')
  } else if (changeAt > contactTop) {
    removeNavClasses();
    document.querySelector('.link_contact').classList.add('active')
  }
};
const removeNavClasses = () => {
  navLinks.forEach(link => link.classList.remove('active'))
};


//  EVENT HANDLERS

//on scroll header shrinks and logo moves
window.addEventListener('scroll', debounce(scrollHeader));

//button to portfolio project webpage
document.querySelector('.btn_contact').addEventListener('click', () => document.location.href = "#contact");

//click on logo 
logo.addEventListener('click', () => window.location.href = 'index.html');

//when SCROLLING - change navbar active class
window.addEventListener('scroll', debounce(changeNavActive));









