function stickyMenu() {
  var timer;
  $(window).scroll(function() {
    if ( timer ) clearTimeout(timer)
    timer = setTimeout(function(){
      if ($(window).scrollTop() >= 90) {
        $('header').addClass('fixed');
      } else {
        $('header').removeClass('fixed');
      }
    }, 200);
  });
  $("#back-top").click(function(){
    $("body,html").animate({scrollTop:0 },"normal");
    return!1
  });
}
function menuToggle() {
  $('.navigation-mobile').on("click", function(e) {
    $(this).parent(".mobileheader").toggleClass("active");
    e.stopPropagation();
  });
  $(document).on('click', function(vl) {
    if ($(vl.target).is('.mobileheader')==false) {
      $('.mobileheader').removeClass("active");
    }
  });
}
function HoverItem() {
  $('.content-image').each(function(){
    $(this).hover(function() {
      var height = $(this).height();
      var img_height = $(this).find('.img-fluid').height();
      var value_top = height - img_height;
      $(this).find('.img-fluid').animate({'top' : value_top}, 2500);
    }, function() {
      $(this).find('.img-fluid').animate({'top' : 0}, 500);
    });
  });
}

$(document).ready(function() {
  //Fixed Menu Left
  if($(document).width() >= 992) {
    $(".list-menu").stick_in_parent({
      offset_top: 0
    });
  }

  menuToggle();
  stickyMenu();
  $('.img-scroll').lazy();
  // init Isotope
  var $grid = $('.content').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows',
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
  };

  // bind filter button click
  $('#show-homepage').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change active class
  $('.list-homepage').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });
});

$(function() {

  $('.nav-hompage ul li:nth-child(1) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.getting_started').offset().top}, 1000);
  });

  $('.nav-hompage ul li:nth-child(2) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.installation').offset().top}, 1000);
  });

  $('.nav-hompage ul li:nth-child(3) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.configuration').offset().top}, 1000);
  });

  $('.nav-hompage ul li:nth-child(4) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.mega_menu').offset().top}, 1000);
  });

  $('.nav-hompage ul li:nth-child(5) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.vertical_menu').offset().top}, 1000);
  });
  $('.nav-hompage ul li:nth-child(6) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.testimonials').offset().top}, 1000);
  });
  $('.nav-hompage ul li:nth-child(7) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.product_comment').offset().top}, 1000);
  });
  $('.nav-hompage ul li:nth-child(8) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.block_tags').offset().top}, 1000);
  });
  $('.nav-hompage ul li:nth-child(9) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.page_customize').offset().top}, 1000);
  });
  $('.nav-hompage ul li:nth-child(10) a').on('click', function(event) {
    event.preventDefault();

    $('body').animate({ scrollTop: $('.upsell').offset().top}, 1000);
  });
});