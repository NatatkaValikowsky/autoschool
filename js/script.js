$(document).ready(function(){
    $('.advantages-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        appendDots: '.advantages-dots',
        arrows: true,
        prevArrow: '.advantages-arrow-left',
        nextArrow: '.advantages-arrow-right',
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
              }
            }
          ]
      });
  });