$(document).ready(function() {

	// бургер кнопка + моб меню
		$('.burger').on('click', function(event){
			$('.mobile-wrap').slideToggle(300);
			$('.mobile-wrap').toggleClass('mobile-wrap-active');
			$(this).toggleClass('burger-active')
			if($('.mobile-wrap').hasClass('mobile-wrap-active')){
				$('body').css({'overflow':'hidden'})
			}
			else{
				$('body').css({'overflow':'visible'})
			}
		});

	// footer аккордеон
		$('.footer_services-title').on('click', function(event){
			$(this).next().slideToggle(300);
			$(this).toggleClass('footer_services-title__active')
		});

	// tech slider
		$('.tech_slider-wrap').slick({
	  	dots: false,
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	  });

	// telephone mask
		let selector = document.querySelectorAll('input[type="tel"]');
		let im = new Inputmask('+7 (999) 999-99-99');
			im.mask(selector);

	// кнопка наверх
	var e = $(".footer_scroll");
    $(window).scroll(function() {
        400 < $(this).scrollTop() ? e.fadeIn(200) : e.fadeOut(200), $("footer").offset().top - $(window).height() + 100 < $(window).scrollTop() ? $(".footer_scroll").addClass("scroll_static") : $(".footer_scroll").removeClass("scroll_static")
    }), $(window).resize(function() {
        var e, s;
        $(window).width() < 768 && (e = $("#touch-nav"), s = $(".nav"), $(e).on("click", function(e) {
            e.preventDefault(), s.slideToggle()
        }))
    }), e.on("click", function() {
        return $("body, html").animate({
            scrollTop: 0
        }, 800), !1
    })

    // object slider
    $('.object').each(function(){
    	 $(this).find('.object_slider').slick({
		  	dots: false,
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    asNavFor: $(this).find('.object_slider-nav'),
		  });
    	 $(this).find('.object_slider-nav').slick({
		  	dots: false,
		  	arrows: false,
		    infinite: true,
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    asNavFor: $(this).find('.object_slider'),
		  });
  	});
})

// contacts-acc
if(document.querySelector('.contacts_map-list')){
	let contactsAccHead = document.querySelector('.contacts_map-list')
	contactsAccHead.onclick = function(){
		if(this.style.height == '50px'){
			this.style.height = '150px'
		} else{
			this.style.height = '50px'
		}
	}
	let contactsAccHeadItem = [...document.querySelectorAll('.contacts_map-title')]
	contactsAccHeadItem.forEach(item => {
		item.onclick = function(){
			if(!this.classList.contains('contacts_map-title__active')){
				let contactsAccHeadItemActive = document.querySelector('.contacts_map-title__active')
				contactsAccHeadItemActive.classList.remove('contacts_map-title__active')
				this.classList.add('contacts_map-title__active')
				let contactsAccIndex = contactsAccHeadItem.indexOf(this)
				let contactsAccBody = [...document.querySelectorAll('.contacts_map-body')]
				contactsAccBody.forEach(item => {
					item.classList.remove('contacts_map-body__active')
				})
				contactsAccBody[contactsAccIndex].classList.add('contacts_map-body__active')
			}
		}
	})
}

// license
if(document.querySelectorAll('.license_acc-head')){
	let licenseHead = [...document.querySelectorAll('.license_acc-head')]
	let licenseBody = [...document.querySelectorAll('.license_acc-body')]
		licenseHead.forEach(item => {
			item.onclick = function(){
				if(!this.classList.contains('license_acc-head__active')){
					let licenseHeadActive = document.querySelector('.license_acc-head__active')
					licenseHeadActive.classList.remove('license_acc-head__active')
					this.classList.add('license_acc-head__active')
					let licenseHeadActiveIndex = licenseHead.indexOf(this)
					let licenseHeadBodyActive = document.querySelector('.license_acc-body__active')
					licenseHeadBodyActive.classList.remove('license_acc-body__active')
					licenseBody[licenseHeadActiveIndex].classList.add('license_acc-body__active')
				}
			}
		})
}

// close video
if(document.querySelector('.license_acc-head')){
	let mainVideo = document.querySelector('.main_video')
	let mainVideoClose = document.querySelector('.main_video-close')
	mainVideoClose.onclick = function(){
		mainVideo.style.display = 'none'
	}
}