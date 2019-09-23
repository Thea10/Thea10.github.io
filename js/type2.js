//import 'typed.js';

var options = {
  strings: ["Hello, ^500 I'm Cynthia", "I'm into -- ^1000Front End Development", "HTML5, ^1000 CSS3,^1000 Bootstrap 4, ^1000 Vanilla JS,^1000 React,^1000 Redux", "Hello, ^2000 I'm Cynthia"],
  typeSpeed: 50,
  backSpeed: 30,
  showCursor: false,
}

const type = document.getElementById('type');

var typed = new Typed(type, options);


window.addEventListener('scroll', (e) => {
            var nav = document.getElementById('nav');
  //  var navbtn = nav.querySelectorAll('button');
  //to change the background on scroll
            if (window.scrollY > 50) {
                console.log("true");
                
                nav.classList.add('nav-scrolled')
            } else if (nav.classList.contains('nav-scrolled')) {
                nav.classList.remove("nav-scrolled");

            }

            /* navbtn.forEach(btn => {
                if (nav.classList.contains('header-scrolled')) {
                btn.classList.add('btn-scrolled')
                } else {
                btn.classList.remove('btn-scrolled')
                }
            }); */

})
