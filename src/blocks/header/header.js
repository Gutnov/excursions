o2.header = {
	burgerClickHandler(instance) {
		$(instance).toggleClass('active')
		$('.header__nav').toggleClass('active');
		$('body').toggleClass('overflov-y');
	}
}