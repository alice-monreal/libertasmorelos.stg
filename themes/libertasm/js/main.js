jQuery( document ).ready(function( $ ) {
	$('.recent_slider').slick({
		autoplay: true,    
		autoplaySpeed: 10000,
	    dots: true,
	    infinite: true,
	    speed: 300,
	    slidesToShow: 1,
	    slidesToScroll: 1
  	});

  	$('.regiones_slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true
	});

	$('.deportes_slider').slick({
		autoplay: true,    
		autoplaySpeed: 10000,
	    dots: true,
	    infinite: true,
	    speed: 300,
	    slidesToShow: 1,
	    slidesToScroll: 1
  	});

  	$('.opiniones_slider').slick({
	    dots: false,
	    infinite: true,
	    speed: 300,
	  	slidesToShow: 1,
	  	centerMode: false,
	  	variableWidth: true
	});

	$('.article_igallery_slider').slick({
	  // lazyLoad: 'ondemand',
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true
	});

  	setTimeout(function(){
  		$('.slick-slider, .recent_slider, .regiones_slider, .opiniones_slider, .deportes_slider').css('opacity', '1');
  	}, 800);

  	// $(".fancybox").fancybox();
  	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {},
			overlay: { locked: false },
			// thumbs	: {
			// 	width	: 100,
			// 	height	: 100
			// }
		}
	});


	// *Add articulo
	
	//Datepicker
	//console.debug('edit: ', $("#edit-field-date-und-0-value"));
	$("#edit-field-date-und-0-value").datepicker({
		inline: true
	});
	
	//Alphanum validation
	$('#edit-title, #edit-field-description-und-0-value, #edit-field-title-und-0-value, #edit-field-title-und-0-value, #edit-field-atags-und-0-value, #edit-field-note-releated-1-und-0-value, #edit-field-note-releated-2-und-0-value, #edit-body-und-0-value').alphanum();

	//Disable inputs
	//#edit-field-type-und-0-value
	$("#edit-field-visited-und-0-value, #edit-field-approved-und-0-value, #edit-field-cancel-und-0-value").attr('disabled','disabled');
	
	//Hide fields.
	$('#field-visited-add-more-wrapper, #field-approved-add-more-wrapper, #field-cancel-add-more-wrapper').css('display','none');


	// *Add opinion
	
	//Datepicker
	$("#edit-field-opinion-date-und-0-value").datepicker({
		inline: true
	});
	
	//Alphanum validation
	$('#edit-field-opinion-summary-und-0-value, #edit-field-opinion-author-und-0-value, #edit-field-opinion-tags-und-0-value').alphanum();
	
	//Disable inputs
	$("#edit-field-opinion-visited-und-0-value, #edit-field-opinion-approved-und-0-value, #edit-field-opinion-canceled-und-0-value").attr('disabled','disabled');
	
	//Hide fields.
	$('#field-opinion-visited-add-more-wrapper, #field-opinion-approved-add-more-wrapper, #field-opinion-canceled-add-more-wrapper').css('display','none');


	// *Add efemeride
	
	//Datepicker
	$("#edit-field-date-efem-und-0-value").datepicker({
		inline: true
	});
	
	// *Hide blocks from some pages.
	
	var url = window.location.href;
	
	// Hide facebook comment from /add/articulo and /add/opinion
	if(url.indexOf("add/articulo") != -1 || url.indexOf("add/opinion") != -1 || url.indexOf("/edit") != -1 || url.indexOf("/delete") != -1){ 
		// console.debug('facebook: ', $('#block-facebook-comments-block-fb-comments'));
		$('#block-facebook-comments-block-fb-comments').css('display','none');
	}
	
	// Hide Redes Sociales from /add/articulo and /add/opinion
	if(url.indexOf("add/articulo") != -1 || url.indexOf("add/opinion") != -1 || url.indexOf("/edit") != -1 || url.indexOf("/delete") != -1){ 
		// console.debug('socials n.: ', $('#block-service-links-service-links'));
		$('#block-service-links-service-links').css('display','none');
	}
	
	//***** Menu

	var categories = $('.categories_list').html(),
		categories_array  = categories.split(","),
		categories_length = (categories_array.length)-1;
		
		categories_array.splice(categories_length, 1);
		// categories_array.splice(0, 1);

	$('.menu-536').append( "<div class='submenu'></div>" );
	for (var i = categories_array.length - 1; i >= 0; i--) {
		categories_array[i];
		$('.menu-536 .submenu').append( "<div class='opt'>"+ categories_array[i] +"</div>" );
	};

	$('.menu-536').hover(function(){
		// console.debug('submenu hover in');
		$('.menu-536 .submenu').fadeIn();
	}, function(){
		// console.debug('submenu hover out');
		$('.menu-536 .submenu').fadeOut();
	});

	// #51687e
	$('.submenu .opt').hover(function(){
		// $(this).css('background-color','#51687e');
		$(this).animate({
		    'background-color': '#51687e'
		  }, 300, function() {
		    // Animation complete.
		  });
	}, function(){
		// $(this).css('background-color','#34495c');
		$(this).animate({
		    'background-color': '#34495c'
		  }, 300, function() {
		    // Animation complete.
		  });
	});

	
});