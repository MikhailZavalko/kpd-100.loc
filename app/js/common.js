$(function() {

	/* OPEN MOBILE MENU & CLOSE WHEN CLICK OUTSIDE */
	$('.hamburger').on('click', function () {
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('active');
	});

	$(document).click( function(e){
		if ( !$(e.target).closest('.main-head').length ) {
			$('.hamburger').removeClass('is-active');
			$('.menu').removeClass('active');
		}
	});
	/* OPEN MOBILE MENU & CLOSE WHEN CLICK OUTSIDE */



	/* SCROLL FOR HEADER */
	jQuery(document).ready(function($) {
		$(window).on('scroll touchmove', function () {
			$('.header').toggleClass('shrinked', $(document).scrollTop() > 0);
    }).scroll();
	});
	/* SCROLL FOR HEADER */



	/* MENU TRIGGER FOR SCROLL */
	$(".menu li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top - 73;
		destination = elementClick == '#home' ? destination - 20 : destination;
		$("html,body").stop().animate({ scrollTop: destination }, 1000);
		$(".hamburger").removeClass('is-active');
		$('.menu').removeClass('active');
		return false;
	});
	/* MENU TRIGGER FOR SCROLL */



	/* MASK PHONE INPUT */
	$('.phone').mask('+7(999) 999 99 99');
	/* MASK PHONE INPUT */



	/* FANCYBOX SETTINGS */
	$('.fancybox').fancybox({
		thumbs : {
			autoStart : true,
			axis : 'x'
		}
	});
	/* FANCYBOX SETTINGS */



	/* SLIDERS */
	$('#sync1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		asNavFor: '#sync2',
		autoplay: true,
  	autoplaySpeed: 6000,
	});

	$('#sync2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '#sync1',
		centerMode: true,
		focusOnSelect: true
	});



	$('#sync3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		asNavFor: '#sync4',
		autoplay: true,
  	autoplaySpeed: 6000,
	});

	$('#sync4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '#sync3',
		centerMode: true,
		focusOnSelect: true
	});
	/* SLIDERS */
	


	/* Magnific Popup */
	$('.open-form-button').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
		callbacks: {
			beforeOpen: function() {
				var $triggerEl = $(this.st.el),
				newClass = $triggerEl.data("modal-class");
				if (newClass) {
					this.st.mainClass = this.st.mainClass + ' ' + newClass;
				}
			}
		}
	});
	/* Magnific Popup */



	/* E-mail Ajax Send */
	$("form").submit(function(e) {
		e.preventDefault;
		var th = $(this);
		$('.form').addClass('loading');
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: th.serialize()
		}).done(function() {
			$('.form').removeClass('loading');
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 14000);
		});
		return false;
	});
	/* E-mail Ajax Send */

});
