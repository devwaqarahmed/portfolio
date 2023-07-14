$(window).ready(function(){
$.getJSON(' https://get.geojs.io/v1/ip/geo.json', function(data) {
  console.log(data.country_code);
    $('body').find('[data-countrycode="'+data.country_code+'"]').attr('selected' , 'true');
});

});


// sticky header
/*$(window).scroll(function() {    
var scroll = $(window).scrollTop();
//>=, not <=
if (scroll >= 300) {
//clearHeader, not clearheader - caps H
$("header").addClass("stickyheader");
} else {
$("header").removeClass("stickyheader");  
}
});*/
// sticky header end

// wow start
new WOW().init();
// wow end


$(".mob-port").slick({
  dots: false,
  arrows: false,
  infinite: true,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
    breakpoint: 776,
    settings: {
     vertical:false,
     dots: false,
     arrows: false
    }
  }
]
});   



// sticky social
$(document).scroll(function () {
	"use strict";
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.sticky-container').fadeIn();
    } else {
        $('.sticky-container').fadeOut();
    }

    if (y >= 70) {
        $(".header-main").addClass("showmenu");
    } else {
        $(".header-main").removeClass("showmenu");
    } 

}); 
// sticky social end



$(document).ready(function() {
"use strict";




    //*****************************
    // Sale Black Friday and Cyber Monday
    //*****************************
    $('.salecrcle-btn').click(function() {
        $('.sale-blckfriday, .salecrcle-btn, .sale-box, .uppersale-bx').toggleClass('open');
    });
    window.setTimeout(function(){
           $('.salecrcle-btn, .salecrcle-btn, .sale-box, .uppersale-bx').toggleClass("open");
       }, 6000);
    ////// end


   //*****************************
    // Mobile Navigation
    //*****************************
    $('.mobile-nav-btn').click(function() {
        $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');
    });


    $('.firstlevel li a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('ul').slideUp();
        }else{
            $('.firstlevel li a').removeClass('active');
            $(this).addClass('active');
            $('.dropdown').slideUp();
            $(this).siblings('ul').slideDown();
        }
    });

    $('.mainnav > li > a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents('li').children('.firstlevel').slideUp();
        }else{
            $(this).addClass('active');
            $(this).parents('li').children('.firstlevel').slideDown();
            $(this).parents('li').siblings('li').children('a').removeClass('active');
            $(this).parents('li').siblings('li').children('.firstlevel').slideUp();
        }
    }); 

     

$(".cs-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
    
    });
$(".portslider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: false,
    slide:'li',
    adaptiveHeight: true,
    responsive: [
    {
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
     vertical:false,
     arrows: false
    }
  }
]
}); 
    
$(".portslider-inner").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: false,
    slide:'li',
    adaptiveHeight: true
    });
        
$(".portslider-inner-1").slick({
    dots:!1,
arrows:!1,
infinite:!0,
speed:1e3,
slidesToShow:5,
slidesToScroll:1,
autoplay:!0,
autoplaySpeed:2e3,
adaptiveHeight:!0,
responsive: [
    {
      breakpoint: 767,
      settings: {
    dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
    });
       
////// main slider
 $(".home-slider").slick({
    dots: true,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 767,
      settings: {
    dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
    
     $(".hm-bnr-slider").slick({
    dots: false,
    arrows: false,
    fade:true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 767,
      settings: {
    dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });


 $(".partnerslider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true
    
    });

 

// progress bar
 var time = 4;
 var $bar, $slick, isPause, tick, percentTime;
$slick = $('.home-slider'); 
$bar = $('.slider-progress .progress');   
$('.slider-wrapper').on({
mouseenter: function() { isPause = true; },
mouseleave: function() { isPause = false; }
});
 function startProgressbar() { resetProgressbar(); percentTime = 0; isPause = false; tick = setInterval(interval, 10); }
  function interval() {
    if(isPause === false) { percentTime += 1 / (time+0.1); $bar.css({ width: percentTime+"%" }); if(percentTime >= 100)
        { $slick.slick('slickNext'); startProgressbar(); }
    }
  }
function resetProgressbar() { $bar.css({ width: 0+'%' }); clearTimeout(tick); }
startProgressbar();  
////// main slider end

////// number slider
 var slickOpts = {
    dots: true,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),

    customPaging: function(slick,index) {
        return '<a> 0' + (index + 1) + '</a>';
    }
  };

  $('.number-slider').slick(slickOpts);
////// number slider end

////// mob slider
    $(".sliderxs").slick({
        arrows: false,
        dots: true,
        autoplay: true,
		adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });
////// mob slider end


// $(".package-slider").slick({
//         dots: true,
//         arrows: false,
//         infinite: false,
//         speed: 600,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         adaptiveHeight: true,
//     responsive: [
//             {
//                 breakpoint: 991,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     }); 



////// testimonial slider
$(".testwraper").slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
    breakpoint: 776,
    settings: {
     vertical:false,
     dots: false,
     arrows: false
    }
  }
]
}); 
////// testimonial slider end

//*****************************
    // Responsive Slider
    //*****************************
    var respsliders = {
      1: {slider : '.packslider'},
      2: {slider : '.boxwrap'}
      // 3: {slider : '.partnerslider'}
      


    };

    //*****************************
    // Function for Responsive Slider 767
    //*****************************

    $.each(respsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: false,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });  

////// product gallery slider
$(".product-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.product-gallery-nav'
    });  
$('.product-gallery-nav').slick({
  dots: false,
  arrows: true,  
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  verticalSwiping:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.product-slider-gallery',
  responsive: [
      {
      breakpoint: 991,
      settings: {
      vertical:false,
      }
    },
    {
    breakpoint: 776,
    settings: {
     vertical:false,
    }
  },
    {
      breakpoint: 480,
      settings: {
        vertical:false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
]
}); 
////// product gallery slider end





$('.thumb-slider').slick({
centerMode: true,
centerPadding: '0px',
arrows: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 3
}
},
{
breakpoint: 767,
settings: {
arrows: false,
dots:false,
centerMode: false,
centerPadding: '10px',
slidesToShow: 1
}
},
{
breakpoint: 480,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 1
}
}
]
});

///// gallery simple
$('.slider-for').slick({
dots: true,
arrows:false,
infinite: true,
speed: 500,
slide: 'li',
fade: false,
cssEase: 'linear',
centerMode: true,
slidesToShow: 1,
variableWidth: true,
autoplay: true,
autoplaySpeed: 4000,
responsive: [{
	breakpoint: 800,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	},
	breakpoint: 1200,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	}
}],
customPaging: function (slider, i) {
	return '<button class="tab">' + $('.thumbsmain li:nth-child(' + (i + 1) + ')').html() + '</button>';
}
});
///// gallery simple end

////// gallery slider
$(".gallery-slider-main").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',    
   asNavFor: '.gallery-nav-main'
    });  
$('.gallery-nav-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  //vertical:true,
  asNavFor: '.gallery-slider-main',
  dots: true,
  //centerMode: true,
  focusOnSelect: true
});	
////// gallery slider end



////// thumb gallery slider
$(".bid-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.bid-gallery-nav'
    });  
$('.bid-gallery-nav').slick({
  dots: false,
  arrows: false,  
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.bid-slider-gallery',
  responsive: [
{
breakpoint: 767,
settings: {
 vertical:false,
}
}
]
});

// my custom slider starts

// $(".partner-slider").slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 991,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//         }
//     }, {
//         breakpoint: 767,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//     }]
// });

//*****************************
    // Tabbing 
    //*****************************
    
    $('[data-targetit]').on('click',function () {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('targetit');
        $('.'+target).siblings('[class^="tabs"]').removeClass('current');
        $('.'+target).addClass('current');
        $('.slick-slider').slick('setPosition', 0);

    });


////// thumb gallery slider end

// function getURLParameter(name) {
//     return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))
// }


function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var val = getURLParameter('pack');
// $('#packages').val(val);  


if(val == '1') {
        $('#packages').val('Startup Website | $145.99');
    }
if(val == '2'){
   $('#packages').val('Professional Website | $599.99');
} 
if(val == '3'){
   $('#packages').val('Elite Website | $999.99');
} 
if(val == '4'){
   $('#packages').val('Custom WordPress Website | $1,599.99');
} 
if(val == '5'){
   $('#packages').val('Custom PHP Website | $2,499.99');
} 
if(val == '6'){
   $('#packages').val('Custom Automated Website Portal | $4,999.99');
} 
if(val == '7'){
   $('#packages').val('Beginners Ecommerce Website | $999.99');
} 
if(val == '8'){
   $('#packages').val('Corporate Ecommerce Website | $1,449.99');
} 
if(val == '9'){
   $('#packages').val('Elite Ecommerce Website | $3,699.99');
}
if(val == '10'){
   $('#packages').val('Automated/Interactive Ecommerce | $7,999.99');
}
if(val == '11'){
   $('#packages').val('Business Web App | $2,499.99');
}
if(val == '12'){
   $('#packages').val('Automated Web App | $4,999.99');
} 
if(val == '13'){
   $('#packages').val('Automated/Interactive Ecommerce Web App | $7,999.99');
} 
if(val == '14'){
   $('#packages').val('Startup Plan | $350');
}
if(val == '15'){
   $('#packages').val('Scaling Plan | $700');
} 
if(val == '16'){
   $('#packages').val('Venture Plan | $1200');
} 
if(val == '17'){
   $('#packages').val('Startup Collateral | $99.00');
} 
if(val == '18'){
   $('#packages').val('Collateral Classic | $199.00');
} 
if(val == '19'){
   $('#packages').val('Premium Collateral | $399.00');
} 
if(val == '20'){
   $('#packages').val('Unlimited Collateral | $499.00');
} 
if(val == '21'){
   $('#packages').val('Web Content | $70.00');
} 
if(val == '22'){
   $('#packages').val('Article Writing | $40.00');
} 
if(val == '23'){
   $('#packages').val('Creative Writing | $75.00');
} 
if(val == '24'){
   $('#packages').val('Blog Writing | $40.00');
} 
if(val == '25'){
   $('#packages').val('Infographics | $200.00');
} 
if(val == '26'){
   $('#packages').val('Startup SMM | $349.99');
} 
if(val == '27'){
   $('#packages').val('Professional SMM | $649.99');
} 
if(val == '28'){
   $('#packages').val('Elite SMM | $1149.99');
} 
if(val == '29'){
   $('#packages').val('Startup Plan | $350');
} 
if(val == '30'){
   $('#packages').val('Scaling Plan | $700');
} 
if(val == '31'){
   $('#packages').val('Venture Plan | $1200');
} 
if(val == '32'){
   $('#packages').val('PPC Startup Plan | $400');
} 
if(val == '33'){
   $('#packages').val('PPC Scaling Plan | $800');
} 
if(val == '34'){
   $('#packages').val('PPC Venture Plan | $1200');
} 
if(val == '35'){
   $('#packages').val('Basic Combo Package | $449.00');
} 
if(val == '36'){
   $('#packages').val('Startup Combo Package | $999.99');
} 
if(val == '37'){
   $('#packages').val('Professional Combo Packages | $1399.99');
} 
if(val == '38'){
   $('#packages').val('Corporate Combo Packages | $1999.99');
} 
if(val == '39'){
   $('#packages').val('Elite Combo Packages | $2999.99');
}
if(val == '40'){
   $('#packages').val('Complete Branding Solution | $1499.99');
}
if(val == '41'){
   $('#packages').val('MOBILE APP DEVELOPMENT');
}
if(val == '42'){
   $('#packages').val('Essential Package | $1299.00');
}
if(val == '43'){
   $('#packages').val('Corporate Package | $2499.00');
}
if(val == '44'){
   $('#packages').val('Business Package | $3999.00');
}
if(val == '45'){
   $('#packages').val('Professional Ecommerce Website | $1,199.99');
}
if(val == '46'){
   $('#packages').val('Complete Branding Solution | $1,499.00');
}


// var val = location.href.match(/[?&]days=(.*?)(?:$|&)/)[1];   // get params from URL
// $('#days').val(val); 



////// tabs generic (nav and tabs in main div)
$('.tab-custom .tab-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this).closest('.tab-custom').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs generic end

////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs custom end

////// Accordion 
$('.accordion .quest-title.active1').addClass('active');
// $('#accordion-1').slideDown(300).addClass('open');
function close_accordion_section() {
jQuery('.accordion .quest-title').removeClass('active');
jQuery('.accordion .quest-content').slideUp(300).removeClass('open');
}
jQuery('.quest-title').click(function(e) {
// Grab current anchor value
var currentAttrValue = jQuery(this).attr('href');
if(jQuery(e.target).is('.active')) {
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
jQuery(this).addClass('active');
// Open up the hidden content panel
jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
}
e.preventDefault();
});
////// Accordion end 

////// fancybox
$('[data-fancybox="swf-file"]').fancybox({
	iframe : {
		css : {
			width : '336px',
			height : '280px'
		}
	}
});

$('[data-fancybox="video-file"]').fancybox({
	iframe : {
		css : {
			width : '580px',
			height : '340px'
		}
	}
});	

 // intel Tel Input
let ip; 
let ip_value;
 $("#phone-country,#phone-coun").intlTelInput({
     
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
    geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
              ip=resp.ip;
            
              
            });
          },
       initialCountry: "auto",
       nationalMode: true,
       separateDialCode: true,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
     // utilsScript: "<?php echo $basesurl;?>js/utils.js"
    });

setTimeout(function(){
    $('input[name="pc"]').val($('.selected-dial-code').html());
    $('input[name="cip"]').val(ip);
    $('input[name="ctry"]').val( $('.country-list .country.active .country-name').html());
}, 3000);


$('body').delegate('.country','click',function(){
$('input[name="pc"]').val($(this).find('.dial-code').html());
$('input[name="cip"]').val(ip);
$('input[name="ctry"]').val($(this).closest("form").find('.country-list .country.active .country-name').html());

/*var oldString2=$('.selected-flag').attr('title').toUpperCase();
  var newString12 = oldString2.split(':',1)[0];
               $('input[name="ctry"]').val(newString12);*/
 });
 

// car scroll top
var $scrolltop = jQuery('.car-top');
jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() >= 200) {
        $scrolltop.addClass("show");
        $scrolltop.addClass("car-down");
    } else {
        $scrolltop.removeClass("show");
        setTimeout(function() {
            $scrolltop.removeClass('car-down');
        }, 300);
    }
});
$scrolltop.on('click', function() {
jQuery('html,body').animate({
    scrollTop: 0
}, 800);
jQuery(this).addClass("car-run");
setTimeout(function() {
    $scrolltop.removeClass('car-run');
}, 1000);
return false;
});
// car scroll top end

}); // document ready end
 
 ////// slick gallery counter
var $gallery = $('.gallery-slider-main');
var slideCount = null;

$gallery.on('init', function(event, slick){
	"use strict";
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	"use strict";
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
	"use strict";
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
	"use strict";
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}
////// slick gallery counter end
 

// validate contact form on keyup and submit
    $("#banform").validate({
      rules: {
        username: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        agree: "required"
      },
      messages: {
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters"
        },
        email: "Please enter a valid email address"
      }
    });

    $("#contactForm").validate();



////// footer year
$(function(){
"use strict";
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});	


function setButtonURL(){
 javascript:$zopim.livechat.window.show();
 }

$(function(){
//Slim Scroller
    
        $.mCustomScrollbar.defaults.theme="light-1"; //set "light-2" as the default theme
        $(".list-scroll").mCustomScrollbar({
            scrollButtons:{
                enable:true
            },
            callbacks:{
                onTotalScroll:function(){ addContent(this) },
                onTotalScrollOffset:100,
                alwaysTriggerOffsets:false
            }
        });

    
}); 


 $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



  $('ul.process-ul li').on('click', function() {
    $('ul.process-ul').addClass('process-animate');
    var tab_id = $(this).attr('id');
    $('ul.process-ul li').removeClass('active');
    $(this).addClass('active');
    $('.process-tabs').removeClass('active');
    $("." + tab_id).fadeIn('slow').addClass('active');
    $('ul.process-ul').removeClass('process1');
    $('ul.process-ul').removeClass('process2');
    $('ul.process-ul').removeClass('process3');
    $('ul.process-ul').removeClass('process4');
    $('ul.process-ul').removeClass('process5');
    $('ul.process-ul').removeClass('process6');
    $('ul.process-ul').addClass(tab_id);
    setTimeout(function() {
        $('ul.process-ul').removeClass('process-animate');
    }, 500);
});

    $( ".srv-info-sec .srv-info-wrap .srv-item-ico" ).hover(function() {
    $('.srv-info-sec .srv-info-wrap .srv-item-ico').removeClass('active');
    $('.srv-info-sec .srv-info-wrap .srv-item-content').removeClass('active');
    $(this).addClass('active');
    $(this).next().addClass('active');
  }); 


  $(".clickbutton").click(function(){
    $('.floatbutton').toggleClass("active");
    $('.crossplus').toggleClass("rotate");
  });
  
    $('.apport-silder').slick({

        dots: false,

        arrows: false,

        speed: 200,

        slidesToShow: 3,

        slidesToScroll: 1,

        autoplay: true,

        autoplaySpeed: 2000,

        centerMode: true,

         responsive: [

        {

            breakpoint: 825,

            settings: {

                slidesToShow: 3,

                slidesToScroll: 1,

                infinite: true,

                dots: false,

                arrows:false

                

            }

        },

        ]

     

    });
     
  $('.case-silder').slick({

        dots: false,
        arrows: false,
        fade: true, 
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,     
        

    });     
     

jQuery(window).ready(function(){
  jQuery('[name="Number"]').keyup(function(){
    var c = jQuery(this).val();
    var strFirstThree = c.substring(0,3);
    var strFirstFour = c.substring(0,4);
    if(strFirstThree == '555' || strFirstFour == '1555'){alert('This is not a valid number');
                                                         jQuery(this).val('');
                                                        }
  });
});

  $("form").submit(function(event) {
    $(this).find('[type="submit"]').attr('disabled' , true);
   var recaptcha =  $(this).find("#g-recaptcha-response").val();
   if (recaptcha === "") {
    $(this).find('[type="submit"]').removeAttr('disabled' , true);
      event.preventDefault();
      alert("Please check the recaptcha");
   }
});



// ************** Validate phone number from client side *****************
function noAlphabet(obj) {
  reg = /[^0-9]/g;
  obj.value = obj.value.replace(reg, "");
}

// ************** Validate Email from client side *****************
function emailValidation(obj) {
  reg = /\A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z/g;
  obj.value = obj.value.replace(reg, "");
}
function validateName(obj)
  {
   var letters = /^[A-Za-z]+$/;
   if(obj.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("Please use alphabets");
     return false;
     }
  }


function alphaOnly(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8);
}
      