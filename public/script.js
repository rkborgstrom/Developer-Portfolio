$('body').scrollspy({ target: '#navbar-example' })


function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".sample-section").offset().top;
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
  }
  parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });
  $(window).resize(function() {
    parallax_height();
  });

  $(document).ready(function() {
    $(".title").lettering();
    $(".button").lettering();
  });
  
  $(document).ready(function() {
    animation();
  }, 1000);
  
  $('.button').click(function() {
    animation();
  });
  
  function animation() {
    var title1 = new TimelineMax();
    title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".title span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }

$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });