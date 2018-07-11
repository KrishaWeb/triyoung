// Header Fixed
jQuery(window).on("scroll load",function(e){
	jQuery(window).on("scroll",function(){
		if (jQuery(this).scrollTop() > 30){
			jQuery('.header-wrap').addClass("sticky");
		} else {
			jQuery('.header-wrap').removeClass("sticky");
		}
	});
});

jQuery( document ).ready( function () {
	// Background image
	jQuery(".bg_img" ).each( function ( i, elem ) {
		var img = $( elem );
		jQuery( this ).hide();
		jQuery( this ).parent().css( {
			background: "url(" + img.attr( "src" ) + ") no-repeat no-repeat center center",
		});
	});

	// menu animation
	jQuery('.hamburgler').click(function(e){
        e.preventDefault();
        jQuery(this).toggleClass('no-hamburgler');
    });

    jQuery('.banner-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		adaptiveHeight: true,
		dots: true,
		swipe: false,
		arrows: false,
		fade: false,
	});

	jQuery('.blog-list-img-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		adaptiveHeight: true,
		dots: true,
		swipe: false,
		arrows: false,
		fade: false,
	});

	// SVG Create
	jQuery(function(){
		jQuery('img.svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			jQuery.get(imgURL, function(data) {
				var $svg = jQuery(data).find('svg');
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}
				$svg = $svg.removeAttr('xmlns:a');
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}
				$img.replaceWith($svg);
			}, 'xml');
		});
	});
});