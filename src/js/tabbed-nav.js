// ==============================================
// Tabbed navigation JS module
// ==============================================

var TabbedNav = (function() {

	// Module variable decleration
	var _$tab_nav_link = $('.js-tabs-nav-link'),
			_$tab = $('.js-tabs-body'),
			_active_class = 'is-active';

	// Click event handler for tab nav links.
	// Displays the appropriate tab
	function _changeTab(event) {
		event.preventDefault();

		// Change active state of tab nav links
		_$tab_nav_link.removeClass(_active_class);
		var index = $(this).addClass(_active_class)
											 .index();

		// Change active state of tab
		_$tab.removeClass(_active_class)
				 .eq(index)
				 .addClass(_active_class);
	}

	// Initialise the module by binding the event handlers
	function init() {
		_$tab_nav_link.click(_changeTab);
	}

	// Export this methods
	return {
		init: init
	};

})();

