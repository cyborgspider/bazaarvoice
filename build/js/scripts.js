(function(){
  var formHandler = function(){
    var $input_wrap = $('.input-wrap'),
        $input_text = $input_wrap.find('input[type="text"]'),
        $submit = $input_wrap.find('input[type="submit"]'),
        input_placeholder = 'Enter a keyword or product number';

    $input_text
      .on('focus', function(){
        if ( $(this).val() === input_placeholder)
          $(this).val('');
      })
      .on('blur', function(){
        if ( $(this).val() === '')
          $(this).val(input_placeholder);
      });
  };

  var scrollHandler = function(){
    var link = $('.choose-product');

    link.on('click', function(e){
      var target = $(this).attr('href'),
          targetOffset = $(target).offset().top;

      e.preventDefault();
      $('html,body').animate({scrollTop: targetOffset + 'px'}, 700);
    });
  };

  var pageInit = function(){
    formHandler();
    scrollHandler();
  };

  pageInit();

})();