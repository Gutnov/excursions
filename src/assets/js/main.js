"use strict"
/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	o2.init();

	o2.uiKit.init();
});

/**
 * основной объект
 */
const o2 =
{
	/**
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init()
	{
		o2.footer.resizer()
	},
	/**
	* отслеживание клика вне блока
	*/
	clickOutside(element, callback)
	{
		const outsideChecker = (event) =>
		{
			const container = $(element);

			if (!container.is(event.target) && container.has(event.target).length === 0)
			{
				document.removeEventListener('click', outsideChecker);
				callback();
			}
		};

		document.addEventListener('click', outsideChecker);

		return outsideChecker;
	},
	dropdown(instance) {
		$(instance).toggleClass('active');
		$(instance).next('._dropdown-content').slideToggle()
	}
}