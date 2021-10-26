(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        // if ($('.loader-wrap').length) {
        //     $('.loader-wrap').delay(1000).fadeOut(500);
        // }
        // TweenMax.to($(".loader-wrap .overlay"), 1.2, {
        //     force3D: true,
        //     left: "100%",
        //     ease: Expo.easeInOut,
        // });
    }

    //Update Header Style and Scroll to Top 
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            var sticky_header = $('.sticky-header, .header-style-two');
            if (windowpos > 250) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function(e) {
                e.preventDefault();
            });
        }
    }

    headerStyle();

    //Submenu Dropdown Toggle
    if ($('.navigation li.dropdown ul').length) {
        $('.navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

    }

    //Search Form Show / Hide
    if ($('.search-box-two .search-icon').length) {
        $('.search-box-two .search-icon').on('click', function() {
            $('.search-box-two .search-icon').toggleClass('open');
        });
    }

    //Search Box Toggle
    if ($('.seach-toggle').length) {
        //Dropdown Button
        $('.seach-toggle').on('click', function() {
            $(this).toggleClass('active');
            $(this).next('.search-box').toggleClass('now-visible');
        });
    }

    //Search Form Show / Hide
    if ($('.post-share-icon').length) {
        $('.post-share-icon').on('click', function() {
            $(this).toggleClass('open');
        });
    }

    //Menu Show / Hide
    if ($('.anim-menu-btn').length) {
        var animButton = $(".anim-menu-btn"),
            navInner = $(".nav-inner");

        function showMenu() {
            TweenMax.to(navInner, 0.6, {
                force3D: false,
                opacity: "1",
                ease: Expo.easeInOut
            });
            navInner.removeClass("close-menu");
        }

        function hideMenu() {
            TweenMax.to(navInner, 0.6, {
                force3D: false,
                opacity: "0",
                ease: Expo.easeInOut
            });
            navInner.addClass("close-menu");
        }
        animButton.on("click", function() {
            if (navInner.hasClass("close-menu")) showMenu();
            else hideMenu();
        });
    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.main-menu .navigation').html();
        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });

        var animButton = $(".mobile-nav-toggler"),
            mobileMneu = $(".mobile-menu"),
            navOverlay = $(".nav-overlay");

        function showMenu() {
            TweenMax.to(mobileMneu, 0.6, {
                force3D: false,
                left: "0",
                ease: Expo.easeInOut
            });
            mobileMneu.removeClass("close-menu");
            navOverlay.fadeIn(500);
        }

        function hideMenu() {
            TweenMax.to(mobileMneu, 0.6, {
                force3D: false,
                left: "-350px",
                ease: Expo.easeInOut
            });
            mobileMneu.addClass("close-menu");
            navOverlay.fadeOut(500);
        }
        animButton.on("click", function() {
            if (mobileMneu.hasClass("close-menu")) showMenu();
            else hideMenu();
        });
        navOverlay.on("click", function() {
            hideMenu();
            $(".anim-menu-btn").toggleClass("anim-menu-btn--state-b");
        });
    }

    if ($('.nav-overlay').length) {
        // / cursor /
        var cursor = $(".nav-overlay .cursor"),
            follower = $(".nav-overlay .cursor-follower");

        var posX = 0,
            posY = 0;

        var mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function() {
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;

                TweenMax.set(follower, {
                    css: {
                        left: posX - 22,
                        top: posY - 22
                    }
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });

            }
        });

        $(document).on("mousemove", function(e) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            mouseX = e.pageX;
            mouseY = e.pageY - scrollTop;
        });
        $("button, a").on("mouseenter", function() {
            cursor.addClass("active");
            follower.addClass("active");
        });
        $("button, a").on("mouseleave", function() {
            cursor.removeClass("active");
            follower.removeClass("active");
        });
        $(".nav-overlay").on("mouseenter", function() {
            cursor.addClass("close-cursor");
            follower.addClass("close-cursor");
        });
        $(".nav-overlay").on("mouseleave", function() {
            cursor.removeClass("close-cursor");
            follower.removeClass("close-cursor");
        });
    }

    function fullHeight() {
        $('.full-height').css("height", $(window).height());
    }
    fullHeight();

    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }

    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };


    // Single Item Carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    //Two Item Carousel
    if ($('.two-item-carousel').length) {
        $('.two-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }


    //Three Item Carousel
    if ($('.three-item-carousel').length) {
        $('.three-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                },
            }
        });
    }


    //Four Item Carousel
    if ($('.four-item-carousel').length) {
        $('.four-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    //Four Item Carousel
    if ($('.four-item-fluidcarousel').length) {
        $('.four-item-fluidcarousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1500: {
                    items: 4
                }
            }
        });
    }

    //five Item Carousel
    if ($('.five-item-carousel').length) {
        $('.five-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    //six Item Carousel
    if ($('.six-item-carousel').length) {
        $('.six-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                900: {
                    items: 4
                },
                1024: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    // Sponsors Carousel
    if ($('.sponsors-carousel').length) {
        $('.sponsors-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            smartSpeed: 500,
            autoplay: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }

    // Banner Background Slide
    if ($('.banner-background-slide').length) {
        $('.banner-background-slide').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: true
        });
    }

    if ($('.banner-section-four').length) {
        $('.banner-section-four').vegas({
            overlay: false,
            transition: 'fade',
            transitionDuration: 4000,
            delay: 10000,
            animation: 'random',
            animationDuration: 20000,
            slides: [{
                    src: 'images/background/3.jpg'
                },
                {
                    src: 'images/background/2.jpg'
                },
                {
                    src: 'images/background/4.jpg'
                }

            ]
        });
    }

    $(".feature-wrap").niceScroll({
        cursorborder: "none",
        cursorborderradius: "0px",
        touchbehavior: true,
        bouncescroll: false,
        scrollspeed: 120,
        mousescrollstep: 90,
        horizrailenabled: true,
        preservenativescrolling: true,
        cursordragontouch: true
    });

    $(".left-panel-two").niceScroll({
        cursorborder: "none",
        cursorborderradius: "0px",
        touchbehavior: true,
        bouncescroll: false,
        scrollspeed: 120,
        mousescrollstep: 90
    });

    //Sortable Masonary with Filters
    function sortableMasonry() {
        if ($('.sortable-masonry').length) {

            var winDow = $(window);
            // Needed variables
            var $container = $('.sortable-masonry .items-container');
            var $filter = $('.filter-btns');

            $container.isotope({
                filter: '*',
                packery: {
                    gutter: 0
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });

            // Isotope Filter 
            $filter.find('li').on('click', function() {
                var selector = $(this).attr('data-filter');

                try {
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: 'linear',
                            queue: false
                        }
                    });
                } catch (err) {

                }
                return false;
            });


            winDow.on('resize', function() {
                var selector = $filter.find('li.active').attr('data-filter');

                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                $container.isotope()
            });


            var filterItemA = $('.filter-btns li');

            filterItemA.on('click', function() {
                var $this = $(this);
                if (!$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active');
                }
            });
        }
        if ($('.sortable-masonry-two').length) {
            var $container = $('.sortable-masonry-two .items-container').isotope({
                itemSelector: '.element-item'
            });

            $container.isotope({
                filter: '*',
                packery: {
                    gutter: 0
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                    var number = $(this).find('.number').text();
                    return parseInt(number, 10) > 50;
                },
                // show if name ends with -ium
                ium: function() {
                    var name = $(this).find('.name').text();
                    return name.match(/ium$/);
                }
            };
            // bind filter on select change
            $('.filters-select').on('change', function() {
                // get filter value from option value
                var filterValue = this.value;
                // use filterFn if matches value
                filterValue = filterFns[filterValue] || filterValue;
                $container.isotope({
                    filter: filterValue
                });
            });

        }
    }

    sortableMasonry();

    // isotope style
    if ($('.masonry-layout').length) {
        $('.masonry-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();

        var changeSelectMenu = function(event, item) {
            $(this).trigger('change', item);
        };
        $(".selectmenu").selectmenu({
            change: changeSelectMenu
        });
    };

    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }

    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function() {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }

    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);

        });
    }

    // Language Switcher
    if ($('.language-switcher').length) {
        $('.language-switcher li a').on('click', function(e) {
            e.preventDefault();
            $('.language-switcher li').removeClass('active');
            $(this).parents().addClass('active');
        });
    }

    if ($('.time-countdown').length) {
        $('.time-countdown').each(function() {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function(event) {
                $(this).html('<h2>' + event.strftime('%D : %H : %M : %S') + '</h2>');
            });
        });
    };
    if ($('.time-countdown-two').length) {
        $('.time-countdown-two').each(function() {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function(event) {
                $(this).html('<li> <div class="box"> <span class="days">' + event.strftime('%D') + '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' + event.strftime('%H') + '</span> <span class="timeRef clr-1">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">' + event.strftime('%M') + '</span> <span class="timeRef clr-2">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">' + event.strftime('%S') + '</span> <span class="timeRef clr-3">seconds</span> </div> </li>');
            });
        });
    };

    // Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.accord-btn', function() {

            if ($(this).hasClass('active') !== true) {
                $('.accordion .accord-btn').removeClass('active');

            }

            if ($(this).next('.accord-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);
            }
        });
    }

    function bannerSlider() {
        if ($(".banner-slider").length > 0) {

            // Banner Slider
            var bannerSlider = new Swiper('.banner-slider', {
                spaceBetween: 0,
                slidesPerView: 1,
                mousewheel: false,
                height: 500,
                grabCursor: true,
                loop: true,
                speed: 1400,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.banner-slider-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.banner-slider-button-next',
                    prevEl: '.banner-slider-button-prev',
                },
            });
            bannerSlider.on('slideChange', function() {
                var csli = bannerSlider.realIndex + 1,
                    curnum = $('#current');
                TweenMax.to(curnum, 0.2, {
                    force3D: true,
                    y: -10,
                    opacity: 0,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        TweenMax.to(curnum, 0.1, {
                            force3D: true,
                            y: 10
                        });
                        curnum.html('0' + csli);
                    }
                });
                TweenMax.to(curnum, 0.2, {
                    force3D: true,
                    y: 0,
                    delay: 0.3,
                    opacity: 1,
                    ease: Power2.easeOut
                });
            });

            function kpsc() {
                $(".slide-progress").css({
                    width: "100%",
                    transition: "width 4000ms"
                });
            }

            function eqwe() {
                $(".slide-progress").css({
                    width: 0,
                    transition: "width 0s"
                });
            }

            kpsc();
            bannerSlider.on("slideChangeTransitionStart", function() {
                eqwe();
            });
            bannerSlider.on("slideChangeTransitionEnd", function() {
                kpsc();
            });

            var totalSlides = bannerSlider.slides.length - 2;
            $('#total').html('0' + totalSlides);
        }


    }

    // Video background
    if ($('.my-background-video').length) {
        $('.my-background-video').bgVideo({
            showPausePlay: false,
            pauseAfter: 1200
        });
    }

    // Testimonial 
    if ($('.testimonial-carousel').length) {
        var galleryThumbs = new Swiper('.testimonial-thumbs', {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 5,
            initialSlide: 1,
            freeMode: true,
            speed: 1400,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                991: {
                    slidesPerView: 4,
                },
                640: {
                    slidesPerView: 3,
                },
            }
        });
        var totalSlides = $(".swiper-container").length;
        var galleryTop = new Swiper('.testimonial-content', {
            spaceBetween: 10,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            loop: true,
            speed: 1400,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
    }

    // Vertical Slider
    if ($('.vertical-slider').length > 0) {

        var verticalCarousel = new Swiper('.vertical-slider', {
            direction: 'vertical',
            spaceBetween: 20,
            slidesPerView: 2,
            mousewheel: true,
            grabCursor: true,
            speed: 1400,
            autoplay: {
                delay: 4000000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.vertical-slider-button-next',
                prevEl: '.vertical-slider-button-prev',
            },
        });
    }

    // Funfact Slider
    if ($('.funfact-slider').length > 0) {

        var verticalCarousel = new Swiper('.funfact-slider', {
            spaceBetween: 1,
            slidesPerView: 2,
            mousewheel: true,
            grabCursor: true,
            speed: 1400,
            autoplay: {
                delay: 4000000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.vertical-slider-button-next',
                prevEl: '.vertical-slider-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
            }
        });
    }

    //Portfolio Tabs
    if ($('.portfolio-tabs').length) {
        $('.portfolio-tabs .portfolio-tab-btns .p-tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).hasClass('actve-tab')) {
                return false;
            } else {
                $('.portfolio-tabs .portfolio-tab-btns .p-tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                $('.portfolio-tabs .p-tabs-content .p-tab').removeClass('active-tab');
                $(target).addClass('active-tab');
            }
        });
    }


    //Portfolio Carousel
    if ($('.portfolio-carousel').length) {
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left">PREV</span>', '<span class="fa fa-angle-right">NEXT</span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1400: {
                    items: 4
                },
                1600: {
                    items: 4
                }
            }
        });
    }




    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    if ($('.js-tilt').length) {
        $('.js-tilt img').tilt({
            max: 35,
            perspective: 1500,
            mobile: false,
        })
    }

    function windwLoad() {
        sortableMasonry();
        fullHeight();
        bannerSlider();
        setTimeout(function() {
            $(".animInBottom").each(function(a) {
                var b = $(this);
                setTimeout(function() {
                    TweenMax.to(b, 1.2, {
                        force3D: true,
                        bottom: "0",
                        ease: Expo.easeInOut
                    });
                }, 230 * a);
            });

        }, 400);

        setTimeout(function() {
            $(".animInTop").each(function(a) {
                var b = $(this);
                setTimeout(function() {
                    TweenMax.to(b, 1.2, {
                        force3D: true,
                        top: "0",
                        ease: Expo.easeInOut
                    });
                }, 230 * a);
            });

        }, 800);
    }



    /* ==========================================================================
    	When document is resize, do
       ========================================================================== */
    $(window).on('resize', function() {
        fullHeight();
        sortableMasonry();
    });

    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
        windwLoad();
    });





})(window.jQuery);