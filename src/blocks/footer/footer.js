o2.footer = {
	windowEl: $(window),
	footerDropdownes: $('.footer').find('._dropdown-content'),
	footerTitle: $('.footer').find('.footer__column-title'),
	resizer() {
		this.windowEl.resize(() => {
			this.footerDropdownes.removeAttr('style')
			this.footerTitle.removeClass('active')
		})
	}
}