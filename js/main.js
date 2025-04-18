document.addEventListener('DOMContentLoaded', function() {

  var skroll = new Skroll()
    .add(".title, .content-media__text, .about-section__content, .text > *, .faq-section__column, .feedback-section__subtitle, .others-section__card, .about-section__media",{
      animation:"fadeInUp",
      delay:120,
      duration:1000,
      wait:250
    })
    // .add(".about-section__media",{
    //   animation:"slideInLeft",
    //   delay:80,
    //   duration:800
    // })
    // .add(".about-section__content",{
    //   animation:"growInRight",
    //   delay:80,
    //   duration:500,
    //   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)",
    // })
    // .add(".faq-section__column",{
    //   animation:"growInLeft",
    //   delay:100,
    //   duration:1000,
    //   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    // })
    .init();

  const 
    burger = document.querySelector('.header__burger'),
    header = document.querySelector('.header');
    
  burger?.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active');
    header?.classList.toggle('header--burger-active');
  })


  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        header.classList.add('header--sticky');
      } else if (window.scrollY == 0) {
        header.classList.remove('header--sticky');
      }
    });
  }
})