/**
* Template Name: Platinum Travels
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
  let selectHeader = select('.header-main');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 56) { // Change the scroll threshold to 56px
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };
  
    window.addEventListener('load', headerScrolled);
    window.addEventListener('scroll', headerScrolled); // Change 'onscroll' to 'window.addEventListener'
  }

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

})();

$('.flyer-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay:true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.testimonial-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay:true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function() {
  // Smooth scroll to top when .back-to-top is clicked
  $('.back-to-top').on('click', function() {
      $('html, body').animate({scrollTop: 0}, 'slow');
  });
});

$(document).ready(function () {
  $(function () {
    $('.matchHeight').matchHeight({});
  });
});

/* Mobile Menu */
$(document).ready(function() {
  $('#menu').slicknav();
});
$(document).ready(function() {
  $('.slicknav_menu').click(function(event) {
      event.stopPropagation();
  });
});
$(document).on("click", function() {
  $('#menu').slicknav('close');
});