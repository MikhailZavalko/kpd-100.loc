$(window).on('load', function() {



	/* MASK PHONE INPUT */
	$('.phone, .phone-number').mask('+7(999) 999-99-99');
	/* MASK PHONE INPUT */



	/* FANCYBOX SETTINGS */
	$('.fancybox').fancybox({
		loop: false,
		thumbs: {
			autoStart: true,
			axis: 'x'
		}
	});
	/* FANCYBOX SETTINGS */


	/* JS FOR SPOILER */
	$( '.spoiler' ).on( 'click', function(e) {
		e.preventDefault();
		$( '.spoiler-wrap' ).css( 'display', 'none' );
		$( '.spoiler' ).css( 'display', 'block' );
	});
	/* JS FOR SPOILER */



	/* FANCYBOX */
	// $(".fancybox").fancybox();
	/* FANCYBOX */



	/* YANDEX MAPS SETTINGS */
	ymaps.ready(function() {

		if( document.getElementById('map') ) {
			var plant = new ymaps.Map("map",{
				center: [48.458623, 135.129240],
				zoom: 16,
				controls: ['zoomControl'],
				behaviors: ["drag", "dblClickZoom"]
			}),
			plantMarker = new ymaps.Placemark([48.458623, 135.129240],{ hintContent: "г. Хабаровск, ул. Иркутская, 8" },
			{
				iconLayout: "default#image",
				iconImageHref: "img/marker_1.png",
				iconImageSize: [423, 84],
				iconImageOffset: [-404, -84]
			});
			plant.geoObjects.add(plantMarker);
		}

		

		if( document.getElementById('map-sales') ) {
			var salesDep = new ymaps.Map("map-sales",{
				center: [48.471580, 135.066150],
				zoom: 16,
				controls: ['zoomControl'],
				behaviors: ["drag", "dblClickZoom"]
			}),
			depMarker = new ymaps.Placemark([48.471580, 135.066150],{ hintContent: "г. Хабаровск, ул. Калинина, 51" },
			{
				iconLayout: "default#image",
				iconImageHref: "img/marker_2.png",
				iconImageSize: [430, 128],
				iconImageOffset: [-22, -128]
			});
			salesDep.geoObjects.add(depMarker);
		}





	})
	/* YANDEX MAPS SETTINGS */



	/* MAGNIFIC POPUP */
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
	/* MAGNIFIC POPUP */



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


});