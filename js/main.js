document.addEventListener('DOMContentLoaded', function() {

  const 
    burger = document.querySelector('.header__burger'),
    header = document.querySelector('.header');
    
  burger?.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active');
    header?.classList.toggle('header--burger-active');
  })

})