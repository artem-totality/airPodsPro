$('.button-menu__btn').on('click', function(){
    if(window.innerWidth < 1035) {
      $(this).next().slideToggle();
    }
    
  });