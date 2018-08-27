
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-bottle-carousel').owlCarousel({
        items:1,
        loop:true,
        nav: false,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      
    // -------   Mail Send ajax
    
    $('.avatar-preview') .readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('imagePreview').css('background-image', 'url('+e.target.result +')');
            $('imagePreview').hide();
            $('imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
    }
    
    $("imageUpload").change(function() {
        readURL(this);
    });

});