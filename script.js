$(document).ready(() => {
  //Menu Mouse Enter
  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  });
  
  //Menu Mouse Leave
  $('.menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });
  
  
  //Hover Functionality over +1 Element
  $('.btn').on('mouseenter', event => {
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover');
  });
  
  //Display Remaining Character Count 
  $('.postText').on('keyup', event => {
    $('.postText').focus();
    const post = $(event.currentTarget).val();
    const remaining = 140 - post.length;
    $('.characters').html(remaining);
    
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else { (remaining > 0) 
      $('.wordcount').removeClass('red');
  }
  });
  
  
});