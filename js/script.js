const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
   menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      body.classList.toggle('lock')
   })
}
menu.addEventListener('click', e => {
   if (e.target.classList.contains('header__menu')) {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      body.classList.toggle('lock')
   }
})

// swiper

const swiper = new Swiper('.swiper', {
   speed: 400,
   loop: true,
   spaceBetween: 100,
   slidesPerView: 1.4,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      1024: {
         slidesPerView: 4.2,
      },
      768: {
         slidesPerView: 3,
      },
      425: {
         slidesPerView: 1.8,
      }
   }
});