/*--------------------------------------------------Slider 1 -------------------------------------------*/

$(window).on('load', function() {
  // The slider being synced must be initialized first
  $('#carl').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carl"
  });
});

/*--------------------------------------------------Slider 2 -------------------------------------------*/

$(window).on('load', function() {
  // The slider being synced must be initialized first
  $('#carls').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#sliders'
  });
 
  $('#sliders').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carls"
  });
});

/*--------------------------------------------------Slider 3 -------------------------------------------*/

$(window).on('load', function() {
  // The slider being synced must be initialized first
  $('#cals').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#thumbs'
  });
 
  $('#thumbs').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#cals"
  });
});



/*--------------------------------------------------Slider 4 -------------------------------------------*/

$(window).on('load', function() {
  // The slider being synced must be initialized first
  $('#cal').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#thumb'
  });
 
  $('#thumb').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#cal"
  });
});


