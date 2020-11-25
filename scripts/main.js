const toggle = document.querySelector('.top__toggle');
const menu = document.querySelector('.top__menu');

const mainLinks = document.querySelectorAll('.top__menu__main-links li a');

const menuClose = document.querySelector('.top__menu-close');

menuClose.addEventListener('click', function(){
  menu.classList.remove('show');
})

toggle.addEventListener('click' , function(){
  console.log('clicked');
  menu.classList.toggle('show');
})

mainLinks.forEach(l => {l.addEventListener('click' , function(){
  mainLinks.forEach(l => {l.classList.remove('active')});
  this.classList.add('active');
  setTimeout(() => {
    menu.classList.toggle('show')
  }, 500);
})})