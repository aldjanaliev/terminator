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
		    focusOnSelect: true,
		    asNavFor: $(this).find('.object_slider'),
		  });
  	});

  	if(document.querySelectorAll('.dismantling_btn')){
	let modalBtn = [...document.querySelectorAll('.dismantling_btn')]
	modalBtn.forEach(item => {
		item.onclick = function(){
				$.fancybox.close()
			}
		})
	}

	// calendare
	$(function(){
		$('#calendare').datepicker({
			multipleDates: 2,
			range: true,
			multipleDatesSeparator: ' - ',
			inline: true
		})
	})
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
				// change title
				let locationParrent = document.querySelector('.locations')
				let locationFirstElement = document.querySelector('.location')
				let locationSPB = document.querySelector('.location__spb')
				let locationKD = document.querySelector('.location__kd')
				let locationIV = document.querySelector('.location__iv')
				if(this.classList.contains('contacts_map-title__spb')){
					console.log(locationParrent)
					console.log(locationFirstElement)
					locationParrent.insertBefore(locationSPB, locationFirstElement)
				} else if(this.classList.contains('contacts_map-title__kd')){
					console.log(locationParrent)
					console.log(locationFirstElement)
					locationParrent.insertBefore(locationKD, locationFirstElement)
				} else if(this.classList.contains('contacts_map-title__iv')){
					console.log(locationParrent)
					console.log(locationFirstElement)
					locationParrent.insertBefore(locationIV, locationFirstElement)
				}
			}
		}
	})
}

// modal_quest-acc
if(document.querySelectorAll('.select-wrap')){
	let selectAccHead = document.querySelectorAll('.select-wrap')
	selectAccHead.forEach(item => {
		item.onclick = function(){
			if(this.style.height == '50px'){
				this.style.height = item.children.length * 50 + 'px'
			} else{
				this.style.height = '50px'
			}
			let selectItem = item.querySelectorAll('.quiz_select')
			selectItem.forEach(item => {
				item.onclick = function(){
					if(!this.classList.contains('select_active')){
						let selectItemParent = this.parentElement
						let selectItemActive = selectItemParent.querySelector('.select_active')
						selectItemActive.classList.remove('select_active')
						this.classList.add('select_active')
						if(selectItemParent.querySelector('.select_default')){
							let selectItemDefault = selectItemParent.querySelector('.select_default')
							selectItemDefault.remove()
						}
					}
				}
			})

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

// form-radio btn
if(document.querySelectorAll('.form-radio')){
	let formRadio = document.querySelector('.form-radio__mail')
	let formRadioAll = document.querySelectorAll('.form-radio')
	let formRadioInputMail = document.querySelector('.detail_input__mail')
	let formRadioInputTel = document.querySelector('.detail_input__tel')
	formRadioAll.forEach(item => {
		item.onclick = function(){
			if(formRadio.checked){
				formRadioInputMail.classList.add('detail_input__active')
				formRadioInputTel.classList.remove('detail_input__active')
			} else{
				formRadioInputMail.classList.remove('detail_input__active')
				formRadioInputTel.classList.add('detail_input__active')
			}
		}
	})
}

// main page dotes
if(document.querySelectorAll('.cycle_list')){
	let cycleList = document.querySelectorAll('.cycle_list')
	cycleList.forEach(item => {
		item.onclick = function(){
			if(this.classList.contains('cycle_list__passive')){
				this.classList.remove('cycle_list__passive')
			} else{
				this.classList.add('cycle_list__passive')
			}
		}
	})
}

// main progress
if(document.querySelector('.range')){
	let rangeHeadItem = document.querySelectorAll('.range-head_item')
	let rangePrice = document.querySelector('.range-price')
	let rangeInput = [...document.querySelectorAll('.range-input')]
	rangeHeadItem.forEach(item => {
		item.onclick = function(){
			if(!this.classList.contains('range-head_item__active')){
				rangeHeadItem.forEach(item => {
					item.classList.remove('range-head_item__active')
				})
				this.classList.add('range-head_item__active')
				// change range-price tabs on click 
				rangePrice.innerText = this.dataset.price
				// change range-body tabs on click 
				let rangeBodyItem = document.querySelectorAll('.range-body')
				let rangeBodyItemMain = document.querySelector('.range-body__main')
				let rangeBodyItemIron = document.querySelector('.range-body__iron')
				let rangeCountNumIron = rangeBodyItemIron.querySelector('.range-count_num')
				if(this.classList.contains('range-head_item__iron')){
					rangeBodyItemMain.classList.remove('range-body__active')
					rangeBodyItemIron.classList.add('range-body__active')
					rangeInputIron = rangeBodyItemIron.querySelector('.range-input')
					rangeInputIron.addEventListener('input', function () {
						totalCalcCount = this.value
						rangeCountNumIron.value = this.value
						rangeTotal.innerText = totalCalcCount * +rangePrice.innerText
					}, false)
				} else{
					rangeBodyItemMain.classList.add('range-body__active')
					rangeBodyItemIron.classList.remove('range-body__active')
				}
				// change range-total tabs on click 
				let rangeTotal = document.querySelector('.range-total')
				let rangeInputParrent = document.querySelector('.range-body__active')
				let rangeInput = rangeInputParrent.querySelectorAll('.range-input')
				let totalCalcCount = 1
				rangeInput.forEach(item => {
					totalCalcCount = totalCalcCount * +item.value
				})
				rangeTotal.innerText = totalCalcCount * +this.dataset.price
			}
		}
	})
	let rangeTotal = document.querySelector('.range-total')
	let rangeBodyMain = document.querySelector('.range-body__main')
	let rangeBodyIron = document.querySelector('.range-body__iron')
	let rangeCountNum = rangeBodyMain.querySelectorAll('.range-count_num')
	let totalCalcCount = 1
	if(rangeBodyMain.classList.contains('range-body__active')){
		rangeInput.forEach(item => {
			item.addEventListener('input', function () {
				totalCalcCount = rangeInput[0].value * rangeInput[1].value * rangeInput[2].value
				rangeTotal.innerText = totalCalcCount * +rangePrice.innerText
				let rangeEventIndex = rangeInput.indexOf(event.target)
				if(rangeEventIndex != 3){
					rangeCountNum[rangeEventIndex].value = rangeInput[rangeEventIndex].value
				}
			}, false)
		})
	} 
}

// modal-btn
// if(document.querySelectorAll('.dismantling_btn')){
// 	let modalBtn = [...document.querySelectorAll('.dismantling_btn')]
// 	modalBtn.forEach(item => {
// 		item.onclick = function(){
// 			this.closest('.modal-wrap').display = 'none'
// 		}
// 	})
// }