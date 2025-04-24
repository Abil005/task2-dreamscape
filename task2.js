$(function () {
    $(window).on('scroll', function () {
      const scrollY = $(window).scrollTop();
  
      $('.layer-back').css('transform', `translateY(${-(scrollY * 0.1)}px)`);
      $('.layer-moon').css('transform', `translateY(${-(scrollY * 0.2)}px)`);
      $('.layer-clouds').css('transform', `translateY(${-(scrollY * 0.3)}px)`);
      $('.layer-mountains').css('transform', `translateY(${-(scrollY * 0.5)}px)`);
      $('.layer-trees').css('transform', `translateY(${-(scrollY * 0.8)}px)`);
  
      $('.story p').each(function () {
        const top = $(this).offset().top;
        const bottom = scrollY + $(window).height();
        if (bottom > top + 50) {
          $(this).addClass('visible');
        }
      });
    });
  
    $('#scrollDown').on('click', function () {
      $('html, body').animate({
        scrollTop: $('.content').offset().top
      }, 1000);
    });
  
    $(document).on('keydown', function (e) {
      if (e.key === 'Enter') {
        $('#scrollDown').click();
      }
    });
  

    function createStars(count = 40) {
      for (let i = 0; i < count; i++) {
        const star = $('<div class="star"></div>');
        star.css({
          top: Math.random() * window.innerHeight + 'px',
          left: Math.random() * window.innerWidth + 'px',
          animationDelay: Math.random() * 5 + 's'
        });
        $('body').append(star);
      }
    }
  
    createStars();
  

    $(window).on('resize', () => {
      $('.star').remove();
      createStars();
    });
  });
  