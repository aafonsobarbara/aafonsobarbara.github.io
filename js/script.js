function swiper() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
}

function initScrollSuave() {
  const linksMenu = document.querySelectorAll('.menu-links a[href^="#"]');
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
  linksMenu.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

function loading() {
  const loadPage = document.querySelector('.loading-page');
  window.addEventListener('load', function () {
    setTimeout(() => {
      loadPage.style.display = 'none';
    }, 1000);
  });
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add('ativo');
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

function menuMobile() {
  const linksMenu = document.querySelectorAll('.link');
  const menuHamburguer = document.querySelector('.hamburguer');
  menuHamburguer.addEventListener('click', function (e) {
    e.preventDefault();
    linksMenu.forEach(function (e) {
      e.classList.toggle('show');
    });
  });
}

function form() {
  const formulario = document.getElementById('contact-form');
  const send = document.querySelector('.success');
  formulario.reset();
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('foi');
    this.contact_number.value = (Math.random() * 100000) | 0;
    emailjs.sendForm('my_website', 'contact_form', this).then(
      function () {
        console.log('SUCCESS!');
        send.style.visibility = 'visible';
        setTimeout(() => {
          send.style.visibility = 'hidden';
        }, 5000);
        formulario.reset();
      },
      function (error) {
        console.log('FAILED...', error);
      },
    );
  });
}

loading();
initAnimacaoScroll();
initScrollSuave();
menuMobile();
swiper();
form();
