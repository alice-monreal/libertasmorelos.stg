jQuery( document ).ready(function( $ ) {
	$('.recent_slider').slick({
		autoplay: true,    
		autoplaySpeed: 6000,
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
		autoplaySpeed: 6000,
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
		inline: true,
		minDate: 0,
	});
	
	//Alphanum validation
	$('#edit-title, #edit-field-description-und-0-value, #edit-field-title-und-0-value, #edit-field-title-und-0-value, #edit-field-atags-und-0-value, #edit-field-note-releated-1-und-0-value, #edit-field-note-releated-2-und-0-value, #edit-body-und-0-value').alphanum();

	//Disable inputs
	//#edit-field-type-und-0-value
	// $("#edit-field-visited-und-0-value, #edit-field-approved-und-0-value, #edit-field-cancel-und-0-value").attr('disabled','disabled');
	$("#edit-field-visited-und-0-value, #edit-field-approved-und-0-value, #edit-field-cancel-und-0-value").css({"opacity":"0","height":"0"});
	
	//Hide fields.
	// $('#field-visited-add-more-wrapper, #field-approved-add-more-wrapper, #field-cancel-add-more-wrapper').css('display','none');
	$('#field-visited-add-more-wrapper, #field-approved-add-more-wrapper, #field-cancel-add-more-wrapper').css({"opacity":"0","height":"0"});


	// *Add opinion
	
	//Datepicker
	$("#edit-field-opinion-date-und-0-value").datepicker({
		inline: true,
		minDate: 0,
	});
	
	//Alphanum validation
	$('#edit-field-opinion-summary-und-0-value, #edit-field-opinion-author-und-0-value, #edit-field-opinion-tags-und-0-value').alphanum();
	
	//Disable inputs
	// $("#edit-field-opinion-visited-und-0-value, #edit-field-opinion-approved-und-0-value, #edit-field-opinion-canceled-und-0-value").attr('disabled','disabled');
	$("#edit-field-opinion-visited-und-0-value, #edit-field-opinion-approved-und-0-value, #edit-field-opinion-canceled-und-0-value").css({"opacity":"0","height":"0"});
	
	//Hide fields.
	// $('#field-opinion-visited-add-more-wrapper, #field-opinion-approved-add-more-wrapper, #field-opinion-canceled-add-more-wrapper').css('display','none');
	$('#field-opinion-visited-add-more-wrapper, #field-opinion-approved-add-more-wrapper, #field-opinion-canceled-add-more-wrapper').css({"opacity":"0","height":"0"});


	// *Add efemeride
	
	//Datepicker
	$("#edit-field-date-efem-und-0-value").datepicker({
		inline: true,
		minDate: 0,
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

	//CMS validations.

	//Article

	// Date field
	var d = new Date(); 
	var curr_date = (d.getDate() < 10) ? '0'+d.getDate() : d.getDate();
	var curr_month = (d.getMonth() < 10) ? '0'+d.getMonth() : d.getMonth();
	var curr_year = d.getFullYear();

	if(url.indexOf("node/add/articulo") != -1){
		
		// Current date in date field
		var art_date = $('#edit-field-date-und-0-value');
		art_date.val(curr_month + "/" + curr_date + "/" + curr_year);
	}

	if(url.indexOf("node/add/articulo") != -1 || url.indexOf("/edit") != -1){

		//Add and edit

		// CATEGORIES FIELD

		// Hide 'clasificacion' field.
		$('#edit-field-type').css({"opacity":"0","height":"0"});
		// Disable 'categories' field.
		// $('#edit-field-categories-und-0-value').attr('disabled','disabled');
		// $('#edit-field-categories-und-0-value').css({"opacity":"0","height":"0"});

		// Categories set checkboxes and their functionality to set on category input.
		var categories_html = '',
			add_category_container = $('#add_category_list_container_hide').html();		
		$('#edit-field-categories').append('<div id="add_category_list_container"></div>');
		$('#add_category_list_container').append(add_category_container);

		// Categories change event
		$("input.add_categories_checkbox[type='checkbox']").change(function() {
			// console.debug('add_categories_checkbox change event');

			var categories_field = $('#edit-field-categories-und-0-value'),
				categories_value = categories_field.val();

			var subcategory = $(this).attr('id'),
				category = $(this).parent('span').parent('span').attr('id');

			var subcategory_id = subcategory.replace("subcategory_", ""),
				category_id    = category.replace("category_", "");

		    if(this.checked){
				if(categories_value == 0){
					categories_value = category_id + ',' + subcategory_id + ',' ;
				}else{
					categories_value = categories_value + category_id + ',' + subcategory_id + ',' 
				}
		    }else{
		    	categories_value = categories_value.replace(category_id + ',' + subcategory_id + ',' , '');
		    }
		    categories_field.val(categories_value);
		});

		// HOME DISPLAY FIELD

		// Disable 'home display' field.
		// $('#edit-field-home-display-und-0-value').attr('disabled','disabled');
		$('#edit-field-home-display-und-0-value').css({"opacity":"0","height":"0"});
			
		// Home display set radios and their functionality to set on home display input.
		var display_home_radio = '<span><input class="add_home_display_radio" id="home_display_1" type="radio" name="home_display" value="1"><label for="home_display_1"> Si </label></span>';
		display_home_radio += '<span><input class="add_home_display_radio" id="home_display_0" type="radio" name="home_display" value="0"><label for="home_display_0"> No </label></span>';
		
		$('#edit-field-home-display').append('<div id="add_display_home_container"></div>');
		$('#add_display_home_container').append(display_home_radio);

		$("input.add_home_display_radio[type='radio']").change(function() {
			// console.debug('home_display radio value: ', $(this).val());
			$('#edit-field-home-display-und-0-value').val($(this).val());
		}); 


		// COVER POSITION FIELD

		// Disable 'cover position' field.
		// $('#edit-field-cover-position-und-0-value').attr('disabled','disabled');
		$('#edit-field-cover-position-und-0-value').css({"opacity":"0","height":"0"});
		
		// Cover position set radios and their functionality to set on cover position input.
		var cover_position_radio = '<span><input class="add_cover_position_radio" id="cover_position_top" type="radio" name="cover_position" value="top"><label for="cover_position_top"> Top </label></span>';
		cover_position_radio += '<span><input class="add_cover_position_radio" id="cover_position_center" type="radio" name="cover_position" value="center"><label for="cover_position_center"> Center </label></span>';
		cover_position_radio += '<span><input class="add_cover_position_radio" id="cover_position_bottom" type="radio" name="cover_position" value="bottom"><label for="cover_position_bottom"> Bottom </label></span>';
		
		$('#edit-field-cover-position').append('<div id="add_cover_position_container"></div>');
		$('#add_cover_position_container').append(cover_position_radio);

		$("input.add_cover_position_radio[type='radio']").change(function() {
			// console.debug('cover_position radio value: ', $(this).val());
			$('#edit-field-cover-position-und-0-value').val($(this).val());
		});


		//Edit

		var categories_field_value = $('#edit-field-categories-und-0-value').val();
		var home_display_field_value = $('#edit-field-home-display-und-0-value').val();
		var cover_position_field_value = $('#edit-field-cover-position-und-0-value').val();
		// console.debug('cover_position_field_value: ', cover_position_field_value);
		
		categories_field_array = categories_field_value.split(",");
		// console.debug('* categories_field_array: ', categories_field_array);
		for (var i = 0; i < categories_field_array.length; i++){
			// console.debug('categories_field_array[i]: ', categories_field_array[i]);
			$("input#subcategory_"+ categories_field_array[i] +"[type='checkbox']").attr('checked', true);
		};

		$("input#home_display_"+ home_display_field_value +"[name='home_display']").attr('checked', true);
		$("input#cover_position_"+ cover_position_field_value +"[name='cover_position']").attr('checked', true);

	}
	
});