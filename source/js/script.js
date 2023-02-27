$(document).ready(function(){
    // slider active
    $('.slider-active').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav: false
            },
            768:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })
    
    // project-active
    $('.project-active').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        autoplay: true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3,
                nav: false
            },
            992:{
                items:3,
                nav: false
            },
            1200:{
                items:4
            }
        }
    })
    
    // blog-active
    $('.blog-active').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        autoplay: true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })

    // testimonial-active
    $('.testimonial-active').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        autoplay: true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })
    
    // brand-active
    $('.brand-active').owlCarousel({
        loop:false,
        margin:0,
        dots:false,
        autoplay: false,
        nav:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                autoplay: true
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:6
            }
        }
    })

    // video popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });

})


"use strict";

// header mobile menu function

let hamburgerIcon = document.querySelector('.hamburger');
let closeIcon = document.querySelector('.close-icon');
let navList = document.querySelector('.nav-list');

function show(){
    navList.style.display = "block";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
}
function hide() {
    navList.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
}

hamburgerIcon.addEventListener('click', show);
closeIcon.addEventListener('click', hide);