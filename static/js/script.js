$(document).ready(function(){

	window.sdev = {};

	window.sdev.form = ({
		
		init: function(){
			
			var _th = this;
			
			// $('.js-phone').mask('+7(999) 999-9999');
			
			$('form').submit(function(){
                if (!_th.checkForm($(this)))
                    return false;
            });
		},
		
		checkForm: function(form){
			var checkResult = true;
			form.find('.warning').removeClass('warning');
			form.find('input, textarea, select').each(function(){
                if ($(this).data('req')){
					switch($(this).data('type')){
						case 'tel':
							var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                            if (!re.test($(this).val())){
                                $(this).addClass('warning');
                                $(this).parents('form').addClass('warning');
                                checkResult = false;
                            }
							break;
                        case 'email':
                            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                            if (!re.test($(this).val())){
                                $(this).addClass('warning');
                                $(this).parents('form').addClass('warning');
                                checkResult = false;
                            }
                            break;
                        case 'select':
							if (!$(this).val()){
                                $(this).parents('.jq-selectbox').first().addClass('warning');
                                $(this).parents('form').addClass('warning');
                                checkResult = false;
                            }
							break;
						case 'checkbox':
							if (!$(this).is(':checked')){
                                $(this).siblings('.checkbox-label__fake').first().addClass('warning');
                                $(this).parents('form').addClass('warning');
                                checkResult = false;
                            }
							break;
                        default:
							if ($.trim($(this).val()) === ''){
								$(this).addClass('warning');
								$(this).parents('form').addClass('warning');
                                checkResult = false;
                            }
                            break;
                    }
                 }
			});
			return checkResult;
		}
		
	}).init();


	window.sdev.owl = ({

		animationInProgress: false,
		
		init:function(){
			
			var _self = this;

			if ($('.js-i-owl').length && $('.js-i-owl').children().length > 1){ 
				$('.js-i-owl').owlCarousel({
					loop: true,
					items: 1,
					// nav: true
					// autoplay: true,
					// autoplayTimeout: 3000,
					// autoplayHoverPause: true
				});
			}

			if ($('.js-i-projects-owl').length && $('.js-i-projects-owl').children().length > 1){ 
				$('.js-i-projects-owl').on('initialized.owl.carousel', function(){
					$('.js-i-projects-owl').find('.owl-prev').addClass('disabled');
				});
				$('.js-i-projects-owl').owlCarousel({
					items: 1,
					nav: true,
					// autoplay: true,
					// autoplayTimeout: 3000,
					// autoplayHoverPause: true
				}).on('translated.owl.carousel', function(e){
					$('.js-i-projects-owl').find('.owl-prev, .owl-next').removeClass('disabled');
					if (e.item.index === 0)
						$('.js-i-projects-owl').find('.owl-prev').addClass('disabled');
					if (e.item.index + 1 === e.item.count)
						$('.js-i-projects-owl').find('.owl-next').addClass('disabled');
				});
			}

			if ($('.js-i-news-owl').length && $('.js-i-news-owl').children().length > 1){ 
				$('.js-i-news-owl').on('initialized.owl.carousel', function(){
					$('.js-i-news-owl').find('.owl-prev').addClass('disabled');
				});
				$('.js-i-news-owl').owlCarousel({
					items: 1,
					nav: true
					// autoplay: true,
					// autoplayTimeout: 3000,
					// autoplayHoverPause: true
				}).on('translated.owl.carousel', function(e){
					$('.js-i-news-owl').find('.owl-prev, .owl-next').removeClass('disabled');
					if (e.item.index === 0)
						$('.js-i-news-owl').find('.owl-prev').addClass('disabled');
					if (e.item.index + 1 === e.item.count)
						$('.js-i-news-owl').find('.owl-next').addClass('disabled');
				});
			}

			if ($('.js-i-workers-owl').length && $('.js-i-workers-owl').children().length > 1){
				$('.js-i-workers-owl').on('initialized.owl.carousel', function(){
					$('.js-i-workers-owl').find('.owl-prev').addClass('disabled');
				});
				$('.js-i-workers-owl').owlCarousel({
					loop: true,
					items: 1,
					margin:43,
					nav: true,
					// autoplay: true,
					// autoplayTimeout: 3000,
					// autoplayHoverPause: true
					responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:2
				        },
				        800:{
				            items:3
				        }
				    }
				}).on('translated.owl.carousel', function(e){
					$('.js-i-workers-owl').find('.owl-prev, .owl-next').removeClass('disabled');
					if (e.item.index === 0)
						$('.js-i-workers-owl').find('.owl-prev').addClass('disabled');
					if (e.item.index + 1 === e.item.count)
						$('.js-i-workers-owl').find('.owl-next').addClass('disabled');
				});
			}

			if ($('.js-i-questions-owl').length && $('.js-i-questions-owl').children().length > 1){
				$('.js-i-questions-owl').on('initialized.owl.carousel', function(){
					$('.js-i-questions-owl').find('.owl-prev').addClass('disabled');
				});
				$('.js-i-questions-owl').owlCarousel({
					loop: true,
					items: 1,
					nav: true
					// autoplay: true,
					// autoplayTimeout: 3000,
					// autoplayHoverPause: true
				}).on('translated.owl.carousel', function(e){
					$('.js-i-questions-owl').find('.owl-prev, .owl-next').removeClass('disabled');
					if (e.item.index === 0)
						$('.js-i-questions-owl').find('.owl-prev').addClass('disabled');
					if (e.item.index + 1 === e.item.count)
						$('.js-i-questions-owl').find('.owl-next').addClass('disabled');
				});
			}

			if ($('.js-i-partners-owl').length && $('.js-i-partners-owl').children().length > 5){ 
				$('.js-i-partners-owl').owlCarousel({
					loop: true,
					items: 5,
					nav: true,
					dots: false
					// autoplay: true,
					// autoplayTimeout: 3000,
					// autoplayHoverPause: true
				});
			}

        }

	}).init();


	window.sdev.slick = ({

		slide:function() {
			$('.project-slider-for-list').slick({
				asNavFor: '.project-slider-nav-list',
				arrows: false
			});
			$('.project-slider-nav-list').slick({
				asNavFor: '.project-slider-for-list',
				slidesToShow: 5,
				slidesToScroll: 1,
				focusOnSelect: true
			});
		},

		// fancy:function() {
		// 	$('.project-slider-for-item-link').on('click', function() {
		// 		var
		// 			itemBig   = $(this).closest('.project-slider-for-item').attr('data-slick-index'),
		// 			slider =	$('.project-slider').clone(true);
		// 			container = $('.project-fancy').html('<div class="project-fancy-list"></div>');

		// 		console.log(itemBig);


		// 		$(this).closest('.slick-track').children().siblings().each(function() {
		// 			$('.project-fancy-list').append($(this)).html();
		// 		});

		// 		// $('.project-fancy-list').append(slider).html();



		// 		$('.project-fancy-list').slick({

		// 		});

		// 	})
		// },

		init:function() {
			var _th = this;

			_th.slide();
			// _th.fancy();

			return this;
		}

	}).init();


	window.sdev.dotdot = ({

		init:function() {
			$('.i-projects-owl-item-content__title').dotdotdot({
				watch: 'window'
			});
			$('.i-projects-owl-item-content__desc').dotdotdot({
				watch: 'window'
			});
			$('.i-news-owl-item-content__title').dotdotdot({
				watch: 'window'
			});
			$('.i-news-owl-item-content__desc').dotdotdot({
				watch: 'window'
			});
			$('.i-gallery-item-content__desc').dotdotdot({
				watch: 'window'
			});
			$('.i-about-body-top-content').dotdotdot({
				watch: 'window'
			});
			$('.js-dotdot').dotdotdot({
				watch: 'window'
			});

		}

	}).init();


	// window.sdev.fotorama = ({

	// 	init:function() {
	// 		var photoLink = $('.project-slider-for-item__img');
			
	// 	    if (photoLink.length) {
	// 		    photoLink.click(function(){

	// 		        var photos = $('.portfolio-item-images-wrapper .portfolio-item-images').data('arr',[1]);
	// 		        var photoOrig = photos.clone(true).data('arr', $.extend([],photos.data('arr')));

	// 		        var ind = $(this).index();
	// 		        var fotorama = $(this).parent('.project-slider-for-list').fotorama({
	// 		            nav: 'thumbs',
	// 		            allowfullscreen: true,
	// 		            thumbwidth: 158,
	// 		            thumbheight: 120,
	// 		            thumbmargin: 9,
	// 		            thumbborderwidth: 0,
	// 		            arrows: 'always'
	// 		        }).data('fotorama');

	// 		        fotorama.show(ind).requestFullScreen();

	// 		        photos.on('fotorama:fullscreenexit', function(e, fotorama) {
	// 		            fotorama.destroy();
	// 		            photos.replaceWith(photoOrig).addClass('clone');
	// 		        });
	// 		    });
	// 	    }
	// 	}

	// }).init();


	window.sdev.scroll = ({

		init:function() {
			$(window).scroll(function(){
				if ($(this).scrollTop() > 1){
					$('.header--index').removeClass('show');
					$('.header--inner').addClass('show');
				} else {
					$('.header--index').addClass('show');
					$('.header--inner').removeClass('show');
				}
			}).trigger('scroll');
		}

	}).init();


	window.sdev.animator = ({

		burger: function() {

			$('.header-burger').on('click', function(e) {
				e.preventDefault();

				var
					headerIndex = $('.header--index'),
					headerInner = $('.header--inner'),
					menu   = headerInner.find('.header-nav'),
					burger = headerInner.find('.header-burger'),
					// logo   = headerInner.find('.header-logo'),
					// phone  = headerInner.find('.header-contacts'),
					body   = $('body');

				if(!menu.hasClass('opend')) {
					menu.addClass('opend');
					burger.addClass('opend');
					// logo.addClass('show');
					// phone.addClass('show');
					// body.addClass('overflow');
				} else {
					menu.removeClass('opend');
					burger.removeClass('opend');
					// logo.removeClass('show');
					// phone.removeClass('show');
					// body.removeClass('overflow');
				};

				if (!headerInner.hasClass('show')){
					headerIndex.removeClass('show');
					headerInner.addClass('show');
				} else {
					headerIndex.addClass('show');
					headerInner.removeClass('show');
				}

			});

		},

		togglequestions: function() {

			$('.js-questions-toggle').on('click', function(e) {
				e.preventDefault();

				var 
					container = $(this).closest('.i-questions-block'),
					block     = container.find('.i-questions-block-item__desc--toggle');

				block.slideToggle();

			});

		},

		accordion: function() {

			$('.js-accordion-trigger').on('click', function(e){
				e.preventDefault();

				var
					$this = $(this),
					container = $this.closest('.questions-accordion-list'),
					item = $this.closest('.questions-accordion-item'),
					currentContent = item.find('.questions-accordion-item-content'),
					duration = 500;

				if(!item.hasClass('active')) {

					item
						.addClass('active')
						.siblings()
						.removeClass('active')
						.find('.questions-accordion-item-content')
						.stop(true, true)
						.slideUp();

					currentContent.stop(true, true).slideDown(duration);
				} else {

					item.removeClass('active');
					currentContent.stop(true, true).slideUp();
				}
			})

		},

		fancy: function() {

			$('#btn-head-popup-quest').fancybox();
			$('#btn-body-popup-quest').fancybox();
			$('[data-fancybox="images"]').fancybox({
				thumbs : {
					autoStart : true
				},

				baseClass : 'slick',

				afterLoad : function() {
					$('.slick .fancybox-thumbs ul').owlCarousel({
						items: 5,
						margin: 20,
						animationEffect: 'fade',
						transitionIn: 'elastic',
						// nav: true,
						dots: false
					});

					// $('.slick .fancybox-thumbs ul').slick({
					// 	slidesToShow: 5,
					// });
				}
			});

			// $('.project-slider-for-item-link').on('click', function() {
			// 	$('.slick .fancybox-thumbs ul').owlCarousel({
			// 		items: 4,
			// 		margin: 10,
			// 		dots: false
			// 	});
			// });

			$.fancybox.defaults.animationEffect = false;

			$.fancybox.defaults.buttons = [
			  // 'slideShow',
			  // 'fullScreen',
			  // 'thumbs',
			  // 'download',
			  'close'
			];
		},

		styler: function() {

			$('.styler').styler({
				selectSmartPositioning: false
			});
			
		},

		mCustom: function() {

			$('.jq-selectbox__dropdown ul').mCustomScrollbar({
				setHeight: 155,

			});
			
		},

		init: function() {
			var _th = this;

			_th.burger();
			_th.togglequestions();
			_th.accordion();
			_th.fancy();
			_th.styler();
			_th.mCustom();

			return this;
		}

	}).init();


	window.sdev.footer = ({

		inBefore:function() {
			$(window).scroll(function(){
				if($(window).width() <= '992'){
					$('.footer-dev').insertBefore($('.footer-contacts'));

			    } else {
			    	$('.footer-contacts').insertBefore($('.footer-dev'));
			    };
		    });
		},

		init: function() {
			var _th = this;

			_th.inBefore();
		}

	}).init();


	window.sdev.maps = ({				
		map: function() {
		    var myMap,
		    	myPlacemark;
			
			var mapLong=$("#map").data("long");
			var mapLat=$("#map").data("lat");

	        myMap = new ymaps.Map("map", {
	            center: [mapLong,mapLat],
	            zoom: 16,
	            controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				behaviors: ['default', 'scrollZoom']
	        });

	        myPin = new ymaps.GeoObjectCollection({}, {
		        iconLayout: 'default#image',
		        iconImageHref: '/pic/mark.png',
		        iconImageSize: [128, 84],
		        iconImageOffset: [-60, -70],
		        cursor: 'ARROW'
	      	});

	        myPlacemark = new ymaps.Placemark([mapLong, mapLat], { 
	        });
			
			var position = myMap.getGlobalPixelCenter();
			myMap.setGlobalPixelCenter([ position[0] + 90, position[1]+90 ]);

	        myPin.add(myPlacemark);
	        myMap.geoObjects.add(myPin);
		
		},

		init: function() {
			var _th = this;

			if ($('#map').length)
  				ymaps.ready(_th.map);
		}

	}).init();

});